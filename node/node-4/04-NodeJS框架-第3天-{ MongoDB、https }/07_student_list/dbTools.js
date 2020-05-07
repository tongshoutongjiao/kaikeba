const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';

const dbName = 'test04';
var obj = {};





// 客户端连接服务器
// MongoClient.connect(url, function(err, client) {
//   if(err) throw err; //连接异常
//   // 获取db对象，再获取集合对象（操作数据）
//   const col = client.db(dbName).collection('createIndexExample1');
//   col.insert([{a:1, b:1}
//     , {a:2, b:2}, {a:3, b:3}
//     , {a:4, b:4}], {w:1}, function(err, result) {
//       if(err) throw err; //插入异常 
//       col.find().toArray(function(err,docs) {
//         if(err) throw err; //查询异常
//         console.log(docs);
//         client.close(); // 关闭连接（放回mongodb的连接池）
//       });
//   });
// });


// 增删改查，每次都需要拿连接，  增删改查调用连接函数，获取对象
function _connect(callback) {
  MongoClient.connect(url, function(err, client) {
    if(err) throw err; //连接异常
    // 获取db对象，再获取集合对象（操作数据）
    callback(client);
  });
}

// 插入数据
obj.insert = function (cname,arrData,fn) {
  _connect(function(client) {
      const col = client.db(dbName).collection(cname);
      col.insert(arrData, function(err, result) {
          // 将数据和错误，交给外部处理
          fn(err,result);
          // 关闭连接
          client.close();
      });
  });
}

// obj.insert('test01',[{name:'jack'},{name:'rose'}],function(err,result) {
//     if(err) throw err;
//     console.log(result);
// });


// 查询数据
obj.find = function (cname,filter,fn) {
  _connect(function(client) {
      const col = client.db(dbName).collection(cname);
      col.find(filter).toArray(function(err,docs) {
          client.close();
          fn(err,docs)
      });
  });
}
// obj.find('test01',{name:'jack'},function(err,users) {
//     if(err) throw err;
//     console.log(users);
// });

// 更新
obj.update = function (cname,filter,updated,fn) {
  _connect(function(client) {
      const col = client.db(dbName).collection(cname);
      col.update(filter,{$set:updated},function(err,result) {
          client.close();
          fn(err,result)
      });
  });
}
// 删除
obj.delete = function (cname,filter,fn) {
  _connect(function(client) {
      const col = client.db(dbName).collection(cname);
      col.deleteMany(filter,function(err,result) {
          client.close();
          fn(err,result)
      });
  });
}

// obj.update('test01',{name:'mick'},{name:'mick1'},function(err,result) {
//   if (err) throw err;
//   console.log(result);
// })


// obj.delete('test01',{name:'mick1'},function(err,result) {
//   if (err) throw err;
//   console.log(result);
// })


function _init(cname) {
   // db.test.createIndex({"sp":"2dsphere"});
   _connect(function(client) {
       const col = client.db(dbName).collection(cname);
       col.createIndex({"anystr":"2dsphere"},function(err) {
            if(err) throw err;
            console.log('索引创建成功');
            client.close();
       });
   });
}
// 数据初始化
_init('test');


// 获取离我最近
obj.nearMe = function (cname,data,fn) {
 _connect(function(client) {
       const col = client.db(dbName).collection(cname);

       col.aggregate({
          $geoNear: {
                                                // 经度   纬度
            near: { type: "Point", coordinates:[data.left,data.right]},
            distanceField: "dist.calculated",
            spherical:true,
            maxDistance: 40000
          }
       },function (err,cursor) {
            if(err) throw err;
            cursor.toArray(function(err,docs) {
                fn(err,docs);
                client.close();
            });
       });
   });
}


 module.exports = obj;