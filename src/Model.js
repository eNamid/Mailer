const mysql = require('mysql2');

const getMysql = () => new Promise((resolve, reject) => {
    const conn = {};
    
    const _conn = mysql.createConnection({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASS,
        database: process.env.MYSQL_DB,
        multipleStatements: true
    });

    conn.query = q => new Promise((resolve, reject) => {
        _conn.query(q, (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    });

    conn.close = () => new Promise((resolve) => {
        _conn.end(() => resolve());
    });

    _conn.connect((err) => {
        if (err) {
            reject(err);
        } else {
            resolve(conn);
        }
    });
});

module.exports = {
    getMysql
};