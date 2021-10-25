const express = require('express');
const app = express();
const api = require('./main/index');
//const PORT = process.env.PORT || 4000;
//const db = require('./config/db');

app.get('/', (req, res) => {
    // db.query("SELECT * FROM test", (err, data) => {
    //     if(!err) res.send({ products : data });
    //     else res.send(err);
    // })
    res.send('Server Response Success');
})

app.listen(PORT, () => {
    console.log('Server On : http://localhost:${PORT}/');
})