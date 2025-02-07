import { createTransport } from 'nodemailer';

const mailClient = createTransport(
  {
    host: process.env.MAIL_HOST,
    port: parseInt(process.env.MAIL_PORT || '0', 10),
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    },
    tls: {
      rejectUnauthorized: false
    }
  },
  {
    to: process.env.MAIL_RECEIVER,
    subject: `Message from 1367 Studio`
  }
);

export default mailClient;
