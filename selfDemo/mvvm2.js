class Vue {
    constructor(opt) {
        this.opt = opt;
        console.log('查看opt');
        console.log(opt)
        this.observe(opt.data);

        let root = document.querySelector(opt.el);
        console.log('挂载元素');
        console.log(root);
        this.compile(root);


    }

    observe(data) {

        Object.keys(data).forEach(key => {

            let obv = new Observer();

            // data 属性
            data[`_${key}`] = data[key];

            Object.defineProperty(data, key, {
                get() {
                    Observer.target && obv.addSubNode(Observer.target);
                    return data[`_${key}`]
                },
                set(newVal) {
                    console.log(newVal);
                    obv.update(newVal)
                    return data[`_${key}`] = newVal;
                }

            })
        })
    }

    compile(node) {
        [].forEach.call(node.childNodes, child => {
            console.log('查看当前元素')
            console.log(this);
            if (!child.firstElementChild && /\{\{(.*)\}\}/.test(child.innerHTML)) {
                let key = RegExp.$1.trim();
                child.innerHTML = child.innerHTML.replace(new RegExp('\\{\\{\\s*' + key + '\\}\\}', 'gm'), this.opt.data[key]);

                // 先赋值改变状态
                Observer.target = child;

                // 
                this.opt.data[key];
                Observer.target = null
            } else if (child.firstElementChild)
                this.compile(child)

        })


    }





}

//  常规观察者类
class Observer {
    constructor() {
        this.subNode = []
    }
    addSubNode(node) {
        this.subNode.push(node)
    }

    update(newVal) {
        console.log('更新状态')
        this.subNode.forEach(node => {
            node.innerHTML = newVal;
        })

    }


}