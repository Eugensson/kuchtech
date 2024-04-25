import nodemailer from "nodemailer";

const email = process.env.NEXT_PUBLIC_EMAIL;
const pass = process.env.EMAIL_PASSWORD;
const recipient = process.env.NEXT_PUBLIC_EMAIL_RECIPIENT;

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: { user: email, pass },
});

export const mailOptions = {
  from: email,
  to: recipient,
};
