const express = require('express');
const router = express.Router();
const db = require('../services/dbService'); 
const appEnv = require('../middleware/appEnv');

/* GET chat message listing. */
//need to pass the number of days in param like http://url/list?days=3
router.get('/list', function(req, res, next) {
  console.log("number of days : " + req.query.days);
  const days = parseInt(req.query.days) || 7

  db.listMessages(days).then(function(list){
    var resFormatted = list.rows.map(function(oneMess){
      return oneMess.value
    });
    res.send(resFormatted);
  }).catch(function(err){
    res.send(err);
  })
});

module.exports = router;
