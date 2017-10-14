const cfenv = require('cfenv')
const path = require('path')
const vcap_service = require('./vcap_services.json')
let appEnv;

try{
    if (process.env.NODE_ENV == "developement"){        
        appEnv = cfenv.getAppEnv({
            vcap : {
                services: vcap_service
            }			
		})
     }else{        
         appEnv = cfenv.getAppEnv()
     }
}
catch(err){
    console.error(err);
}

module.exports = appEnv;