let tools={
    getRandom(min,max){
        min=Math.ceil(min);
        max=Math.floor(max);
        return (max-min+1)*Math.random()+min;

    }
}