let container=document.getElementById('container');
for(let i=0;i<10;i++){
    let r=Tools.getRandom(0,255)
    let g=Tools.getRandom(0,255)
    let b=Tools.getRandom(0,255)
    let box=new Box(container,{
        backgroundColor:`rgb(${r}${g}${b})`
    })
}