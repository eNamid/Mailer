const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: '',
        pass: ''
    }
}, {
    from: 'Mailer Test <>'
})

const mailer = message => {
    transporter.sendMail(message, (err, info) => {
        if (err) {
            console.log(err);
        }   else {
            console.log('Email sent: ', info);
        }
    })
}

module.exports = { mailer };
