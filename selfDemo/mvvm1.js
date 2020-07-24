 //  定义Vue 类别
 function Vue(opt) {
    this.opt = opt;

    // 绑定属性
    this.observe(opt.data);
    let root = document.querySelector(opt.el);
    this.compile(root);
}

Vue.prototype.observe = function (data) {

    Object.keys(data).forEach(key => {

        //  创建观察者对象
        let obv = new Observer();

        //   绑定所有属性值
        data[`_${key}`] = data[key];
        console.log(data);

        //  通过getter setter 暴露for 循环中作用域下的obv，闭包产生
        Object.defineProperty(data, key, {
            get() {
                Observer.target && obv.addSubNode(Observer.target);
                console.log('data[key]');
                console.log(data[`_${key}`],key)
                return data[`_${key}`]
            },
            set(newVal) {
                obv.update(newVal)
                data[`_${key}`] = newVal;
            }
        })
    })

}
Vue.prototype.compile = function (node) {
    [].forEach.call(node.childNodes, child => {    
        if (!child.firstElementChild && /\{\{(.*)\}\}/.test(child.innerHTML)) {
            let key = RegExp.$1.trim();
            child.innerHTML = child.innerHTML.replace(new RegExp('\\{\\{\\s*' + key + '\\s*\\}\\}','gm'), this.opt.data[key]);
            Observer.target = child;
            this.opt.data[key];
            Observer.target = null
        } else if (child.firstElementChild) this.compile(child)
    })
}



// //  观察者类
function Observer(opt) {
    this.subNode = [];
}

//  添加节点
Observer.prototype.addSubNode = function (node) {
    this.subNode.push(node)
}

//  更新节点
Observer.prototype.update = function (newVal) {
    console.log('更新节点');
    console.log(newVal)
    this.subNode.forEach(node=>{
        node.innerHTML = newVal;
    })
}


//  实例化

window.onload = function () {
    let opt = {
        el: '#app',
        data: {
            name: '检索中...',
            age: 28
        }
    }

    let vm = new Vue(opt)

    setTimeout(() => {
        opt.data.name = '赵海龙';
    }, 2000);




}