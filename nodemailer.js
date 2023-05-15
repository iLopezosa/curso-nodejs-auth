const nodemailer = require('nodemailer');

// async..await is not allowed in global scope, must use a wrapper
async function sendMail() {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'olin.adams@ethereal.email',
      pass: 'RWzDbq79QuZpYAyB3d',
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: 'olin.adams@ethereal.email', // sender address
    to: "olin.adams@ethereal.email, nacho.lopezosa@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log('Message sent: %s', info.messageId);
  // Message sent: <id>

  // Preview only available when sending through an Ethereal account
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

sendMail().catch(console.error);