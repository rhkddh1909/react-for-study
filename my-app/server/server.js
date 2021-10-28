const express = require('express');
const app = express();
const api = require('./routes/getMyInfo'); 
const port = process.env.PORT || 4000;

app.use('/api/getMyInfo',api);

app.listen(port, function(){
    console.log(`Listening on port : ${port}`);
})