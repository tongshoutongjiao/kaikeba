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
  
