const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'database-1.ckkkvirwsako.us-east-2.rds.amazonaws.com',
  port: 3306,
  user: 'admin',
  password: 'password',
  database: 'DB',
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL as id ' + connection.threadId);
});

module.exports = connection;
