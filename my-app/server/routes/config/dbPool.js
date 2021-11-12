const mysql = require('mysql');

 const pool = mysql.createPool(
     {
        host : 'localhost',
        user : 'root',
        password : 'djaakwl12@!',
        connectionLimit : 30,
        waitForConnections: true //true : 사용가능한 connection이 없다면 기다린다, false : 에러처리 

     }
);

 module.exports = pool;