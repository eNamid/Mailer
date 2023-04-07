const { getMysql } = require('./src/Model');
const { mailer } = require('./src/nodemailer');

(async () => {
    const connection = await getMysql();
    const users_email = await connection.query('SELECT * FROM users_email');

    await connection.close();

    const users = {};

    for (let emails of users_email) {
        users[emails.email] = emails.email;
    }

    const email = Object.values(users);

    console.log(email);

    const message = {
        to: email,
        text: 'Hi, my name is Dima and it my auto sendler of mail a mail'
    }

    mailer(message);

    // process.exit()
})()    