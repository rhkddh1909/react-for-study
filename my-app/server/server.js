const express = require('express');
const app = express();
const getMyInfo = require('./routes/getMyInfo'); 
const getOgInfo = require('./routes/getOgInfo'); 
const port = process.env.PORT || 4000;

app.use('/api/getMyInfo',getMyInfo);
app.use('/api/getOgInfo',getOgInfo);

app.listen(port, function(){
    console.log(`Listening on port : ${port}`);
})