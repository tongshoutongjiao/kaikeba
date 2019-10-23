
const pi=3.1415926;

function sum(...rest){
    console.log('开始调用加法函数');
    console.log(rest);
    console.log(arguments);
    
}


sum(1,2,3,4,5,6,7,2,5,3,6,3)