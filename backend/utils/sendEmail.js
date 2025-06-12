const nodemailer = require('nodemailer');

module.exports = async function sendEmail(to, subject, text) {
  const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "d79f9e534226b2", // ← ton vrai username Mailtrap
      pass: "8c7cceee70175a"        // ← ton vrai password complet ici
    }
  });

  await transporter.sendMail({
    from: '"TRY-ON Support" <no-reply@tryon.com>',
    to,
    subject,
    text
  });
};
