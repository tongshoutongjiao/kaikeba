
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


function getFib(n){
    let cur, prev=1,prev2=1
    if(n==1||n==2){
        cur=1;
    }
    for(let i=3;i<=n;i++){
        cur=prev+prev2;
        prev=prev2
        prev2=cur;    
    }

    console.log('查看第n项的数据')

    console.log(n,cur);
    return cur;
}

getFib(5);
