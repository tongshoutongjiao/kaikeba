//  引入对象
const express=require('express');

//  创建express
let server1=express();
server1.use(function(req,res,next){
    res.end('EXPRESS OK')
});
server1.listen(8882,()=>{
    console.log('服务器启动在8882端口')
});


// koa

const Koa=require('koa');

//  启动服务
let server2=new Koa();

//  返回对象
server2.use(function(context){
    console.log('KOA上下文对象');
    console.log(context);
    context.body='Koa OK'

});

//  监听端口
server2.listen(9999,()=>{
    console.log('服务器启动在9999端口')
})