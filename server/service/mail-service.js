const nodemailer = require('nodemailer');

class MailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: 'ask.fm.corporation@gmail.com',
        pass: 'gebgylwhefuqrkjw',
      },
    });
  }

  async sendActivationMail(to, link) {
    try {
      await this.transporter.sendMail({
        from: process.env.SMTP_USER,
        to,
        subject: 'Activation Link',
        text: 'Whoa! It freakin works now.',
        html: `<div><h3>Hi, New ask's user!</h3><p>Please go to the following link and activate your account</p><a href='${link}'>${link}</a></div>`,
      });
    } catch (error) {
      console.error('Error sending email:', error);
      throw error;
    }
  }
}

module.exports = new MailService();
