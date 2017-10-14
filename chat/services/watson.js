var watson = require('watson-developer-cloud');

var conversation = watson.conversation({
  username: process.env.WATSON_USERNAME,
  password: process.env.WATSON_PASSWORD,
  version: process.env.WATSON_VERSION,
  version_date: process.env.WATSON_VERSION_DATE
});


module.exports = conversation;