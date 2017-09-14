var express = require('express');
var router = express.Router();
var conversation = require('../services/watson');
var db = require('../services/dbService.js');

/* GET users listing. */
router.post('/', function(req, res, next) {
    var context = {};    
    var body = {text : req.body.text};    
    conversation.message({
        workspace_id: process.env.WATSON_WORKSPACE_ID,
        input: body,
        context: context
      },  function(err, response) {
        if (err){
          console.log('error:', err);
          res.send(err);
        }else{          
          //sending back the response
          res.json(response);        
          //insert message in db
          response.date = req.body.date;          
          db.insertInDb(response).then(function(res){
            console.log("1 document inserted");
          }).catch(function(err){
            console.log(err);
          });
        }
    });  
});

module.exports = router;
