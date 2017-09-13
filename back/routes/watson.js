var express = require('express');
var router = express.Router();
var conversation = require('../services/watson');

/* GET users listing. */
router.get('/', function(req, res, next) {
    var context = {};
    conversation.message({
        workspace_id: process.env.WATSON_WORKSPACE_ID,
        input: {'text': 'whats your name'},
        context: context
      },  function(err, response) {
        if (err)
          console.log('error:', err);
        //   res.status()
        else
          console.log(JSON.stringify(response, null, 2));
      });
  
});

module.exports = router;
