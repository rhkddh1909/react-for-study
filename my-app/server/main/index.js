const express = require('express');
const main = express();

main.get('/test',(req, res) => {
    res.send({test : "this is test!!"});
});

module.exports = main;