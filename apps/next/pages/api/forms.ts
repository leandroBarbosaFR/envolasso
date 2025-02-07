import type { NextApiRequest, NextApiResponse } from 'next';
import * as yup from 'yup';
import mailClient from '../../services/mailClient';
import contactEmailBody from '../../lib/middleware/emails/contactEmailBody';

interface ContactFormInput {
  Email: string;
  Name: string;
  Subject: string;
  Message: string;
}

const formHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { body } = req;
  try {
    const schema = yup.object({
      Email: yup.string().required().email(),
      Name: yup.string().required(),
      Message: yup.string().required()
    });
    console.info(`validating request`);
    console.info(body);
    await schema.validate(body);
    const { Email, Name, Subject, Message } = body as ContactFormInput;
    console.info(body);
    const emailHtml = contactEmailBody(`
      <p>Email: ${Email}</p>
      <p>Name: ${Name}</p>
      <p>Subject: ${Subject}</p>
      <p>Message: ${Message}</p>`);
    await mailClient.sendMail({
      from: `${Name} <${Email}>`,
      subject: `Message from 1367 Studio contact form - ${Name}`,
      html: emailHtml
    });
    res.status(200).json({ message: 'email sent' });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Invalid form data' });
  }
};
export default formHandler;
