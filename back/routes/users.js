var express = require('express');
var router = express.Router();
var db = require('../services/dbService'); 

/* GET chat message listing. */
//need to pass the number of days in param like http://url/list?days=3
router.get('/list', function(req, res, next) {
  console.log("number of days : " + req.query.days);
  db.listMessages(req.query.days).then(function(list){    
    var resFormatted = list.map(function(oneMess){
      return {
        id : oneMess._id,
        date : oneMess.date,
        input : oneMess.input.text,
        output : oneMess.output.text
      }
    });    
    res.send(resFormatted);
  }).catch(function(err){
    res.send(err);
  })  
});

module.exports = router;
