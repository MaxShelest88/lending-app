import { createTransport } from 'nodemailer';

const email = process.env.EMAIL_ADDRESS;
const pass = process.env.EMAIL_PASSWORD;

export const transporter = createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass,
  },
});

export const mailOptions = {
  from: email,
  to: email,
};
