var mysql = require('mysql');

 const db = mysql.createPool({
     host     : 'localhost',
     user     : 'root',
     password : 'djaakwl12@!',
 });

 module.exports = db;