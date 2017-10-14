const cloudant = require('../services/cloudantService');
const moment = require('moment');
const constants = require('./constants');

/**
 * 
 * for cloudant
 */
// don't keep the connection open, in case we have multiple instance of the server it can be a problem
function insertInDb (messObj) {    
    return new Promise (function (resolve, reject){                            
        cloudant.chatDb().then(function(db){            
            db.insert(messObj, (err, body) => {
                if(err){
                    reject(err)
                    return;
                }
                resolve(body)
            })
        }).catch(err=>{
            reject(err)
        })
    })
}

function listMessages (days) {
    return new Promise (function (resolve, reject){   
        const dateFrom = moment().subtract(days,'d').format('YYYY-MM-DD HH:mm:ss');
        cloudant.chatDb().then(function(db){           
            db.view(constants.DB.view.designName, constants.DB.view.viewName,{
                startkey : dateFrom,
                limit : 50
            }, (err, body) => {
                if(err){
                    reject(err)
                    return;
                }
                console.log("listMessage", body)
                resolve(body)
            })
        }).catch(err=> {
            reject(err)
        })        
    })


}

/**
 * 
 *for mongodb
 */

// don't keep the connection open, in case we have multiple instance of the server it can be a problem
// function insertInDb (messObj) {
//     return new Promise (function (resolve, reject){                            
//         // Connect using MongoClient
//         MongoClient.connect(process.env.DB_URL, function(err, db) {
//             if (err) throw err
//             // Use the admin database for the operation
//             var adminDb = db.admin();            
//             db.collection("chat").insertOne(messObj, function(err, res) {
//                 if (err) throw err;                
//                 resolve(res);
//                 db.close();
//             });            
//         });
//     })
// }

// function listMessages (days) {
//     return new Promise (function (resolve, reject){                            
//         // Connect using MongoClient
//         MongoClient.connect(process.env.DB_URL, function(err, db) {
//             if (err) throw err
//             // Use the admin database for the operation
//             var adminDb = db.admin();
//             //get zall the messages of the last 3 days;
//             var dateFrom = moment().subtract(days,'d').format('YYYY-MM-DD HH:mm:ss');
//             console.log('dateFrom', dateFrom)
//             db.collection("chat").find({date : {$gt:dateFrom}}).toArray(function(err, res) {
//                 if (err) throw err;
//                 console.log(res.length + " document found");
//                 resolve(res);
//                 db.close();
//             });            
//         });
//     })


// }


var dbObj = {
    insertInDb : insertInDb,
    listMessages : listMessages
}

module.exports= dbObj;