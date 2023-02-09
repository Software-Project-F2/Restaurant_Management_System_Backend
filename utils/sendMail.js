const nodeMailer = require('nodemailer');

const sendMail = async (options) => {
  const transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    // service: process.env.SMTP_SERVICE,
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD
    }
  });

  const message = {
    from: `${process.env.SMTP_EMAIL}`,
    to: options.email,
    subject: options.subject,
    text: options.message
  };

  await transporter.sendMail(message);
};

module.exports = sendMail;
