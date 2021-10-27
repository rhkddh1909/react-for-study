const express = require('express');
const router = express.Router();
const pool = require('./config/dbPool');

pool.on('acquire',function(connection){
    console.log('Connection %d acquired', connection.threadId);
});
pool.on('release',function(connection){
    console.log('Connection %d release', connection.threadId);
});
pool.on('enqueue',function(connection){
    console.log('Connection %d enqueue', connection.threadId);
});

var query = "SELECT TEST_KEY,TEST_BODY FROM portfolio.test";

router.get('/', function(req,res){
    pool.getConnection(function(err,connection){
        if (err) throw err;
        connection.query(query, (err, data) => {
            if(!err) {
                if(data.length == 1){
                    res.send(data[0]);
                }
                else if(data.length > 1){
                    res.send(data);
                }
            }
            else res.send(err);
       })
       connection.release();
    })
})

module.exports = router;