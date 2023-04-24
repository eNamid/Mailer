module.exports = {
    apps: [
      {
        name: 'mailer',
        script: 'service.js',
        watch: true,
        ignore_watch: ['node_modules'],
        env: {
          PORT: 8080,
          NODE_ENV: 'development',
          MYSQL_DB: 'mydatabase',
          MYSQL_USER: 'dima',
          MYSQL_PASS: '543dimon543',
          MYSQL_HOST: 'localhost'
        }
      }
    ],
  };