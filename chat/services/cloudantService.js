const Cloudant = require('cloudant');
const creds = require('../middleware/appEnv').getServiceCreds('marcoucou-chat-cloudant')
const constants = require('./constants')

function db (){
    return new Promise(function(resolve, reject){
        Cloudant({account:creds.username, password:creds.password}, function(err, cloudant) {
            if (err) {
               console.error('Failed to initialize Cloudant: ' + err.message);
               reject(err);
               return ;
            }
          resolve(cloudant.db);                            
          });
    });
}

function chatDb () {
    return new Promise (function(resolve, reject){
        db().then(function(res){
            resolve(res.use(constants.DB.name))
        }).catch(function(err){
            reject(err)
        })
    })
}

function initialization () {
    db().then(database=>{
        database.list(function(err, body){
            if (err){
                console.error(err)
                return;
            }
            if (!body.some(function(db) {return (db == constants.DB.name)})){
                database.create(constants.DB.name, function(err, res){
                    if (err){
                        console.error(err)
                        return;
                    }                        
                })   
            }
        })
    }).catch(err =>{
        console.error('Failed to initialize Cloudant: ' + err.message);
    })
}

function transformToDbObj() {

}

const clObj = {
    db,
    initialization,
    chatDb 
};



module.exports = clObj;