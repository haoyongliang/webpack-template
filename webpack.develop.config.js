/*
* 开发时候的配置文件
* */

var path = require('path');
// 自动打开浏览器插件
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    // entry:path.resolve(__dirname,'src/js/app.js'),
    entry:[
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname,'src/js/app.js')
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    eslint: {
        configFile: '.eslintrc.js'
    },
    module: {
        preLoaders: [
            { test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/ }
        ],
        loaders: [
            // 处理jsx语法和es6语法
            {
                test: /\.jsx?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
                loader: 'babel',// 加载模块 "babel" 是 "babel-loader" 的缩写
            },
            // 处理css引用
            {
                test: /\.css$/,
                loader: 'style!css' // 中间用感叹号连接多个加载器，多个加载器的时候执行顺序是从右往左
            },
            // 处理scss引用
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            },
            // 处理图片引用
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                loader: 'url' // 1kb=1024b  1b=8bit   ~3kb
            },
            // 处理字体
            {
                test: /\.(eot|woff|ttf|woff2|svg)$/,
                loader: 'url'
            }
        ]
    },
    plugins: [
        new OpenBrowserPlugin({url: 'http://localhost:8080/', browser: 'chrome'})
    ]

}

