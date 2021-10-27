const express = require('express');
const app = express();
const api = require('./routes/index');
const port = process.env.PORT || 4000;
const pool = require('./config/dbPool');

app.use('/api',api);

var query = "SELECT * FROM MY_PORTFOLIO.MY_INFO";

pool.on('acquire',function(connection){
    console.log('Connection %d acquired', connection.threadId);
});
pool.on('release',function(connection){
    console.log('Connection %d release', connection.threadId);
});
pool.on('enqueue',function(connection){
    console.log('Connection %d enqueue', connection.threadId);
});

app.listen(port, function(){
    console.log(`Listening on port : ${port}`);
})

// app.get('/', (req, res) => {
//     pool.getConnection(function(err,connection){
//         if (err) throw err;
//         connection.query(query, (err, data) => {
//             if(!err) res.send({ products : data });
//             else res.send(err);
//        })
//        connection.release();
//     })
// })