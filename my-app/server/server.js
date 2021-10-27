const express = require('express');
const app = express();
const api = require('./routes/test'); 
const port = process.env.PORT || 4000;

app.use('/test',api);

app.listen(port, function(){
    console.log(`Listening on port : ${port}`);
})