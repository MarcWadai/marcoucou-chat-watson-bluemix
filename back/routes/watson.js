var express = require('express');
var router = express.Router();
var conversation = require('../services/watson');

/* GET users listing. */
router.post('/', function(req, res, next) {
    var context = {};
    console.log("receive send message to watson",req.body);
    var body = {text : req.body.text};    
    conversation.message({
        workspace_id: process.env.WATSON_WORKSPACE_ID,
        input: body,
        context: context
      },  function(err, response) {
        if (err){
          console.log('error:', err);
          res.send(err);
        }          
        else{
          console.log(JSON.stringify(response, null, 2));
          res.json(response);
        }          
      });
  
});

module.exports = router;
