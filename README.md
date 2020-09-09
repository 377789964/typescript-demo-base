* 1、安装typescript: npm i typescript -g (全局安装)

* 2、查看帮助：tsc -h

* 3、初始化：tsc --init (创建tsconfig.json文件)
* 
* 4、编译.ts文件：tsc ./src/index.ts (会自动生成.js文件)
* 
* 5、安装webpack让项目跑起来：npm i webpack webpack-cli  webpack-dev-server -D
* 
* 6、安装typescript的loader同时需要本地安装typescript: npm i ts-loader typescript -D
* 
* 7、安装插件：npm i html-webpack-plugin -D
* 
* 8、安装插件：npm i clean-webpack-plugin -D (生产环境使用，每次构建后清空dist目录，避免多次构建后产生缓存)
* 
* 9、安装插件：npm i webpack-merge -D (合并webpack配置文件)
* 
* package.json文件介绍：
* "scripts": {
*    // 关键字start：启动服务      开发环境            配置文件路径
*    "start": "webpack-dev-server --mode=development --config ./build/webpack.config.js"
*    // 关键字build: 执行webpack命令 指定生产环境  指定配置文件路径
*    "build": "webpack --mode=production -config ./build/webpack.config.js",
*  },
* 
* 