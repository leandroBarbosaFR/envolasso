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
      Email: yup.string().required('L\'email est requis').email('L\'email n\'est pas valide'),
      Name: yup.string().required('Le nom est requis'),
      Message: yup.string().required('Le message est requis')
    });

    console.info(`Validation de la requête`);
    console.info(body);

    await schema.validate(body);

    const { Email, Name, Subject, Message } = body as ContactFormInput;

    const emailHtml = contactEmailBody(`
      <p>Email : ${Email}</p>
      <p>Nom : ${Name}</p>
      <p>Sujet : ${Subject}</p>
      <p>Message : ${Message}</p>`);

    await mailClient.sendMail({
      from: `${Name} <${Email}>`,
      subject: `Siteweb message de ${Name}`,
      html: emailHtml
    });

    res.status(200).json({ message: 'Email envoyé avec succès' });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Données du formulaire invalides' });
  }
};

export default formHandler;
