const { getMysql } = require('./src/Model');
const { mailer } = require('./src/nodemailer');

(async () => {
    const connection = await getMysql();
    const users_email = await connection.query('SELECT * FROM users_email');

    await connection.close();

    const users = {};

    for (let emails of users_email) {
        users[emails.email] = emails.username;
    }

    const email = Object.keys(users);
    const username = Object.values(users);

    for (let i = 0; i < email.length; i++) {

        const message = {
            to: email[i],
            subject: 'Mailer Test',
            attachments: [{
                filename: 'city.jpg',
                path: __dirname + '/image/city.jpg',
                cid: 'city'
            }],
            text: `Hi, my name is Dima and it my auto sendler of mail a mail.

            
Thank u ${username[i]}`
        }

        mailer(message);
        console.log('Successful!')
    }
})()    