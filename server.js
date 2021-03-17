const express = require("express");
var router = express.Router();
const app = express();
// var mongojs = require('mongojs');

const port = process.env.PORT || 3000;

// var db = mongojs("my mlab connection string", ['testcollection']);

//Get All Tasks
app.get('/', function(req, res, next){
    console.log("db");
    // db.testcollection.find(function(err, tasks){
    //     if(err){
    //         res.send(err);
    //     }
    //     res.json(tasks);
    // });
});

app.listen(port, () => {
    console.log(`listening on port ${port} ...... `);
});