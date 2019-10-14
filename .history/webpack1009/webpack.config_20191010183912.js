// 由于webpack是基于node构建的，所以webpack配置文件中，任何合法的node语法都符合
let path=require('path');
let htmlWebpackPlugin=require('html-webpack-plugin')

module.exports={
    entry:path.join(__dirname,'./src/main.js'),
    output:{
        path:path.join(__dirname,'./dist'),
        filename: "bundle.js"
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname,'./src/index.html'),
            filename: "index.html"
        })
    ],
    module: {
        rules: [
            {test:/\.css$/, use: ['style-loader','css-loader']},
            {test:/\.less$/, use: ['style-loader','css-loader','less-loader']},
            {test:/\.scss$/, use: ['style-loader','css-loader','sass-loader']},
            {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader?limit=33535&name=[name].[ext]'}

        ]
    }
}
