const express = require('express');
const router = express.Router();
const conversation = require('../services/watson');
const db = require('../services/dbService.js');

/* GET users listing. */
router.post('/', function(req, res, next) {
  console.log("coucou before res insertindb");
    let context = {};    
    let body = {text : req.body.text};    
    
    conversation.message({
        workspace_id: process.env.WATSON_WORKSPACE_ID,
        input: body,
        context: context
      },  function(err, response) {
        if (err){
          console.error('error:', err);
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
