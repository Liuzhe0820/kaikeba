const mysql = require('mysql');

const conn = mysql.createConnection({
  host: 'rm-2ze9k65q394ma1y2u4o.mysql.rds.aliyuncs.com',
  user: 'a2337230',
  password: 'Jj543540310',
  database: 'fanhuijie'
})
conn.connect();

module.exports = conn;
