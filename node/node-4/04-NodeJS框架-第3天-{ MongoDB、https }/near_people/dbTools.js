var obj = {};
const MongoClient = require('mongodb').MongoClient;
const test = require('assert');
// Connection url
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'test';

function _connect(callback) {
    // Connect using MongoClient
    MongoClient.connect(url, function(err, client) {
        callback(client);
    });
}
// 初始化
_connect(function(client) {
      let c = client.db(dbName).collection('heros');
      c.createIndex({'sp':'2dsphere'},function() {
          client.close();
      });
});


// 增删改查
obj.insert = function(c_name, dataArr, fn) {
    _connect(function(client) {
        let c = client.db(dbName).collection(c_name);
        c.insertMany(dataArr, function(err, results) {
            client.close();
            fn(err, results);
        });

    });
}
// 查
obj.find = function(c_name, filter, fn) {
    _connect(function(client) {
        let c = client.db(dbName).collection(c_name);
        c.find(filter).toArray(function(err, documents) {
            client.close();
            fn(err, documents);
        });

    });
}


// obj.insert('test', [
//   { name: 3, sp: { type: "Point", coordinates: [105.754, 41.689] } }, 
//   { name: 4, sp: { type: "Point", coordinates: [105.304, 41.783] } }, 
//   { name: 2, sp: { type: "Point", coordinates: [105.084, 41.389] } }, 
//   { name: 1, sp: { type: "Point", coordinates: [105.831, 41.285] } }], function(err, results) {
//     if (err) throw err;
//     console.log(results);
// });

// obj.find('test',{},function(err,results){
//   if(err) throw err;
//   console.log(results);
// });

obj.findNear = function(c_name, filter, fn) {
    _connect(function(client) {
        let c = client.db(dbName).collection(c_name);
        c.aggregate({
          $geoNear: {
            near: { type: "Point", coordinates:[filter.l,filter.r]},
            distanceField: "dist.calculated",
            spherical:true,
            // maxDistance: 10000000,
            // query:filter
          }
        }, function(error, cursor) {
          if(error) throw error;
          cursor.toArray((err,documents)=>{
            client.close();
            fn(err,documents);
          })
        })

    });
}
// obj.findNear('test',{},function(err,documents) {
//   if(err) throw err;
//   console.log(documents);
// });
module.exports = obj;