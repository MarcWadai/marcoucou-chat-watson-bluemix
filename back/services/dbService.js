var MongoClient = require('mongodb').MongoClient;
var moment = require('moment');

// don't keep the connection open, in case we have multiple instance of the server it can be a problem
function insertInDb (messObj) {
    return new Promise (function (resolve, reject){                            
        // Connect using MongoClient
        MongoClient.connect(process.env.DB_URL, function(err, db) {
            if (err) throw err
            // Use the admin database for the operation
            var adminDb = db.admin();            
            db.collection("chat").insertOne(messObj, function(err, res) {
                if (err) throw err;                
                resolve(res);
                db.close();
            });            
        });
    })
}

function listMessages (days) {
    return new Promise (function (resolve, reject){                            
        // Connect using MongoClient
        MongoClient.connect(process.env.DB_URL, function(err, db) {
            if (err) throw err
            // Use the admin database for the operation
            var adminDb = db.admin();
            //get zall the messages of the last 3 days;
            var dateFrom = moment().subtract(days,'d').format('YYYY-MM-DD HH:mm:ss');
            console.log('dateFrom', dateFrom)
            db.collection("chat").find({date : {$gt:dateFrom}}).toArray(function(err, res) {
                if (err) throw err;
                console.log(res.length + " document found");
                resolve(res);
                db.close();
            });            
        });
    })


}


var dbObj = {
    insertInDb : insertInDb,
    listMessages : listMessages
}

module.exports= dbObj;