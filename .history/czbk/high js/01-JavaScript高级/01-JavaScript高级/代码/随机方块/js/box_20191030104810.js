function Box(parent,options){
    // 设置对象的属性
     options=options||{};

     this.backgroundColor=options.backgroundColor||'red';
     this.width=options.width||20;
     this.height=options.heigth||20;
     this.x=options.x||0;
     this.y=options.y||0;

    //   创建对应的div
    this.div=document.createElement('div');
    parent.appendChild(this.div);

    // 设置div的样式

}

Box.prototype.init=function(){
    let div=this.div;
    div.style.backgroundColor=this.backgroundColor;
    div.style.width=this.width;
    div.style.height=this.height;
    div.style.left=this.x+'px';
    div.style.top=this.y+'px';

    // 脱离文档流
    div.style.position='absolute';
}
