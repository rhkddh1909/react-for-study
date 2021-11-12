const express = require('express');
const ogs = require('open-graph-scraper-lite');
const { param } = require('./getMyInfo');
const getOgInfoRouter = express.Router();

getOgInfoRouter.get('/', function(req,res){
    let url = req.query.url;
    console.log(req.query);
    const options = { url: url };

    ogs(options, (error, results, response) => {
        //console.log('error:', error); // This is returns true or false. True if there was a error. The error it self is inside the results object.
        //console.log('results:', results); // This contains all of the Open Graph results
        //console.log('response:', response); // This contains the HTML of page
        if(results){
            res.send(results);
        }
        else if(error){
            throw error;
        }
    });
})
module.exports = getOgInfoRouter;