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

