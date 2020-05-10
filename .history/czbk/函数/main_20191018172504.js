
const pi=3.1415926;

function sum(...rest){
    console.log('开始调用加法函数');
    console.log(rest);
    console.log(arguments);
    
}


// sum(1,2,3,4,5,6,7,2,5,3,6,3)

//  
// function getMax(arr){
//     let max=arr[0];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>max){
//             max=arr[i]
//         }
        
//     }
//     console.log(max)


    

// }
// getMax([1,2,3,43,6,3,54,89,43]);


//  判断一个数是否是素数，除了一和自身之外能被除尽的数
// function judgePrimeNumber(number){

//     let isPrime=true;
//     for(let i=2;i<number;i++){
//         if(number%i===0){

//             // 如果此处执行了。说明不是质数
//             isPrime=false;
//             break;
//         }

//     }

//     if(isPrime){
//         console.log('质数')
//     }else{
//         console.log('不是质数')
//     }



// }

// judgePrimeNumber(13)


//  斐波那契数列第n个数是多少？  1 1 2 3 5 8 13


// function getFib(n){
//     let cur, prev=1,prev2=1
//     if(n==1||n==2){
//         cur=1;
//     }
//     for(let i=3;i<=n;i++){
//         cur=prev+prev2;
//         prev=prev2
//         prev2=cur;    
//     }

//     console.log('查看第n项的数据')

//     console.log(n,cur);
//     return cur;
// }

// getFib(5);
// getFib(6);
// getFib(7);
// getFib(8);


//  对数组排序， 从小到大，---冒泡排序

// function sort(array){

//     //  外层循环控制趟数

//     for(let i=0;i<array.length-1;i++){

//         // 假设排序 ok
//         let isSort=true;

//         for(let j=0;j<array.length-1-i;j++){
//             if(array[j]>array[j+1]){
//                 // 没有排好序
//                 isSort=false;
//                 let tmp=array[j+1];
//                 array[j+1]=array[j];
//                 array[j]=tmp;

//             }

//         }
//         if(isSort){
//             break;
//         }


//     }

//     return array;

// }
// let arr=[1,324,54,54,43,232,54,64,4232,5453,243];
// console.log('查看排序')
// console.log(sort(arr))

function isRun(year){
    //  假设这个年份不是闰年
    let result=false;
    if((year%4&&year%100!==0)||(year%400===0)){
        result=true;
    }

    return result;
}

function getDays(year,month,day){

    // 计算总共有多少天
    let days=day;
    for(i=1;i<month;i++){
        switch (i){
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                days+=31;
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                days+=30;
                break;
            case 2:
               let flag= isRun(year);
               days=flag?days+29:days+28;
               break;
        }
        

    }
    return days
}


function fun(){
    str='affdd'
}
fun();
console.log(str)


console.log(getDays(1998,1,31))

console.log(getDays(1998,2,5))