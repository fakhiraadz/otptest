const mysql = require('mysql');

const db = mysql.createConnection({
  host     : 'eu-cdbr-west-01.cleardb.com',
  user     : 'b66931577db9f1',
  password : 'a1c4271b',
  database : 'heroku_387537abc9826b2'
});

module.exports = db;