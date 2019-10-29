function animate(element, target) {
    //清除定时器
    if(element.timerId) {
        clearInterval(element.timerId);
    }
    element.timerId = setInterval(function () {
        var current = element.offsetLeft;
        var step = (target - current) / 10;

        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        current += step;
        element.style.left = current + "px";

        if(step === 0) {
            clearInterval(element.timerId);
        }
    },30);
}
