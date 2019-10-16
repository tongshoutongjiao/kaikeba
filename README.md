# 同手同脚的计划

## 既然选择了远方，便只顾风雨兼程。

2019最后几个月计划,
每天六点到九点，无论刮风下雨，都要严格执行，加油！！！

### WEBPACK

#### 什么是webpack?

webpack 是前端的一个项目构建工具，它是基于 Node.js 开发出来的一个前端工具；

##### 第一天 1009 签到

    1. webpack 常用的插件 html-webpack-plugin以及热加载编译原理
    2. 处理css样式文件需要的loader style-loader css-loader cnpm i style-loader css-loader -D
    3. webpack 节点：entry output devServer plugins module

##### webpack处理第三方文件类型的过程

 ```

 1. 发现这个 要处理的文件不是JS文件，然后就去 配置文件中，查找有没有对应的第三方 loader 规则
 2. 如果能找到对应的规则， 就会调用 对应的 loader 处理 这种文件类型；
 3. 在调用loader 的时候，是从后往前调用的；
 4. 当最后的一个 loader 调用完毕，会把 处理的结果，直接交给 webpack 进行 打包合并，最终输出到  bundle.js 中去
 ```

##### 第二天 1010 签到

    1. webpack 常见错误处理
    2. url--loader 使用
    3. static 静态属性 所谓静态属性，就是可以通过类型.属性直接访问的属性
    4. 实例属性 通过实例直接访问属性的
    5. 在webpack中只能处理一部分的es6语法，一些高级的es6或者es7语法是处理不了的，这时候需要借助于第三方的loader来处理这种属性，处理好之后，会打包到bundle.js中。通过babel可以帮我们将高级的语法转换为低级的语法

##### vue 里边的render函数

##### 第三天 1011 签到

    1.es6中使用import 和export的方法
    2. import 和export default 配套使用
    3. module.exports 和 require 配套使用
    4. export default 只允许向外暴露一次
    5. 在一个模块中既可以使用export 也可以使用export default 向外暴露成员
    6. export 向外暴露的成员，只能使用{}的形式来接收，这种形式叫做按需导出，必须严格按照导出事后的名称来接收
    7. 如果export 导出的要起别名，使用 import as 来接收

##### 常见的浏览器及其内核

    1.谷歌 火狐 ie  opera 
    2.谷歌内核 ---blink  IE--- Trident firefox ---Gecko  safari --webkit Opera---Presto
    3.浏览器内核包括渲染引擎和js引擎
    4.2013 年谷歌宣布和webkit终止合作

###### Web标准

    1. w3c和其他组织制定的
    2. 包括三大类，结构(html)，行为(js)和样式（cs）

##### html（Hyper Text Markup Language）初识

    1. html head body 尖括号包括

##### 1012 签到

    1. 标签 <开始></结束>
    2. 单标签 <br />
    3. html 根标签 head 头标签 body 主体
    4. doctype 文档声明 
    5. meta charset 字符集 常用utf-8
    6. gb2312 简体  BIG5 繁体中文 GBK 全部中文字符 ，GB2312的扩展，支持繁体字  UTF-8 包括所有的语言识别

##### 标签语义化

    1. 方便代码阅读和维护
    2. 同时让浏览器或是爬虫更好的解析，从而更好的分析内容
    3. 使用语义化标签，更有利于搜索引擎优化

##### 常用的html标签

    1. 标题 h1~h6 
    2. 段落标签 p  水平线标签 <hr />
    3. 换行标签 <br />
    4. div,span 无语义
    5. 文本格式化标签  加粗<b></b><strong></strong> 倾斜 <i></i> <em></em>  删除线的文字 <s></s> <del></del>  下划线<u></u> <ins></ins> 

##### 标签属性

    1.<标签名 属性名='属性值' 属性名2='属性值2'></标签名>
    2. 属性名之间用空格隔开

##### 图片标签

    1. <img src='url' alt='替换文本' title='鼠标悬停显示的文字' border='边框 eg:10'/> 单标签

##### 链接标签

    1. a 标签 <a href:'http://www.baidu.coom'></a>

##### 锚点定位

    1.  描点定位适合与比较长的页面，从而迅速到达页面中的位置
    2.  <a>< href="#idName">跳转链接</a>

##### base标签

    1. <base target="_blank"/>
    2. 写在head标签中

#### 特殊字符

    1. &nbsp 空格
    2. &lt 小于号  &gt 大于号

#### 注释标签

     1. 多使用注释标签是非常好的代码习惯
     2. 注释标签里面的内容是给程序员看的，浏览器是不执行
     3. <!--   注释内容 -->

#### 列表

     1. 无序列表 ul li 
     2. 有序列表 ol li 
     3. 自定义列表 dl定义标题 dt定义描述 dd 定义解释

#### 表格 table

     1. tr 行标签 td 单元格标签 tr 里边只能放td
     2. 属性值 border cellspacing cellpadding width height align 
     3. 表头 tr -th 表头标签
     4. 表格结构 thead -->表格头  tbody-->表格体  
     5. 表格标题 caption 
     6 合并单元格 rowspan 跨行合并单元格 colspan 跨列合并单元格

#### 表单 form

     1.表单的目的：手机用户信息
     2.表单控件 input 控件  input 是个单标签 <input /> 可以通过type属性来变换形状
     3.表单域：存放表单的区域

#### 1013 签到

     1. html 发展历史
     2. header article nav footer aside section 详情点击w3c school 查看
     3. datalist option 跟input 配合使用 input中 用list属性，datalist 用id属性来对应
     4. field legend 搭配使用
     5. input 新增的type 属性 email tel url search range 
     6. input 属性 value placeholder autofocus multiple(多选) autocomplete
     7. 多媒体 embed 
     8. au dio 音频 video 视频
#### 1015 签到
     1.京东实战css项目
     2. 过渡动画 transition
     3. 全局样式global.css 基本样式 base.css 页面样式 
#### 1016签到
     ##### 读取文件的过程
     1. 获取文件 
     2. 开始读取，创建阅读器 fileReader 
     3. 读取成功 回调函数
     ##### canvas 绘图
     1.获取画布对象 canvas.getContext("2d")
     2. 落笔  ctx.moveTo(x,y)
     3. 连线  ctx.lineTo(300,100)
     4. 描边  ctx.stroke();
     5. 绘制颜色 宽度 ctx.strokeStyle="red";  ctx.lineWidth="20";
     6. 收笔 ctx.beginPath();
     ##### 浏览器存储
     1. localStorage  sessionStorage
     2. setItem getItem removeItem clear

     
