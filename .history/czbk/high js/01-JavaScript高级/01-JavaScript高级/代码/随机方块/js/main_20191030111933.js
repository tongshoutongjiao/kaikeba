let container=document.getElementById('container');
let array=[];
for(let i=0;i<10;i++){
    let r=Tools.getRandom(0,255)
    let g=Tools.getRandom(0,255)
    let b=Tools.getRandom(0,255)
    let box=new Box(container,{
        backgroundColor:`rgb(${r},${g},${b})`
    });
    // 把创建好的方块添加到数组中
    array.push(box);
}


function randomBox(){
    // 随机生成方块的坐标
    console.log('随机生成坐标');

    for(let i=0;i < array.length;i++){
        let box=array[i];
    
        box.random()
    }
}
randomBox();
setInterval(randomBox,500)