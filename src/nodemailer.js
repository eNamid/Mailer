const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'gavaza.dima@gmail.com',
        pass: '030Dimon8200'
    }
}, {
    from: 'Mailer Test <gavaza.dima@gmail.com>'
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