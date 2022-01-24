
# webpack 系统学习
## 什么是 webpack
本质上，`Webpack` 是一个现代 `JavaScript` 应用程序的静态模块打包器（static module bundler）。在 `Webpack` 处理应用程序时，它会在内部创建一个依赖图（dependency graph），用于映射到项目需要的每个模块，然后将所有这些依赖生成到一个或多个 `bundle`。
## webpack 解决什么问题？
Webpack 可以做到*按需加载*。像 Grunt、Gulp 这类构建工具，打包的思路是：遍历源文件→匹配规则→打包，这个过程中做不到按需加载，即对于打包起来的资源，到底页面用不用，打包过程中是不关心的。
Webpack 跟其他构建工具本质上不同之处在于：*Webpack 是从入口文件开始，经过模块依赖加载、分析和打包三个流程完成项目的构建*。在加载、分析和打包的三个过程中，可以针对性的做一些解决方案，达到按需加载的目的，比如code split（拆分公共代码等）。
当然，Webpack 还可以轻松的解决传统构建工具解决的问题：
- 模块化打包，一切皆模块，JS 是模块，CSS 等也是模块；
- 语法糖转换：比如 ES6 转 ES5、TypeScript；
- 预处理器编译：比如 Less、Sass 等；
- 项目优化：比如压缩、CDN；
- 解决方案封装：通过强大的 Loader 和插件机制，可以完成解决方案的封装，比如 PWA；
- 流程对接：比如测试流程、语法检测等。

## 常用配置介绍
### 配置类型
- 对象(最常见)
- 函数
使用场景: 如果我们只使用一个配置文件来区分生产环境（production）和开发环境（development），则可以使用函数类型的 Webpack 配置，函数类型的配置必须返回一个配置对象
```
module.exports = (env, argv) => {
    return {
        mode: env.production ? 'production' : 'development',
        devtool: env.production ? 'source-maps' : 'eval',
        plugins: [
            new TerserPlugin({
                terserOptions: {
                    compress: argv['optimize-minimize'] // 只有传入 -p 或 --optimize-minimize
                }
            })
        ]
    };
};
```
- Promise
使用场景: 如果需要异步加载一些 Webpack 配置需要做的变量，那么可以使用 Promise 的方式来做
```
module.exports = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                entry: './app.js'
                /* ... */
            });
        }, 5000);
    });
};
```
- 多配置数组
使用场景: 在一些特定的场景，我们可能需要一次打包多次，而多次打包中有一些通用的配置，这时候可以使用配置数组的方式，将两次以上的 Webpack 配置以数组的形式导出
```
module.exports = [
    {
        mode: 'production'
        // 配置1
    },
    {
        // 配置2
    }
];
```
## Webpack 的入口（entry）和输出（output）
webpack 是一个模块打包工具，能够从一个需要处理的 JavaScript 文件开始，构建一个依赖关系图（dependency graph），该图映射到了项目中每个模块，然后将这个依赖关系图输出到一个或者多个 bundle 中
从上面文字的认识，可以轻易的得到 Webpack 的两个*核心概念：entry和output*，即入口和输出，Webpack 是从指定的入口文件（entry）开始，经过加工处理，最终按照output设定输出固定内容的 bundle；而这个加工处理的过程，就用到了loader和plugin两个工具；loader是源代码的处理器，plugin解决的是 loader处理不了的事情

### context
context即项目打包的相对路径上下文，如果指定了`context="/User/test/webpack"`，那么我们设置的`entry`和`output`的相对路径都是相对于`/User/test/webpack`的，包括在 JavaScript 中引入模块也是从这个路径开始的。由于context的作用，决定*了context值必须是一个绝对路径*
```
// webpack.config.js
module.exports = {
    context: '/Users/test/webpack'
};
```
> Tips：在实际开发中 context 一般不需要配置，不配置则默认为process.cwd()即工作目录。
### entry入口
Webpack 的entry支持多种类型，包括字符串、对象、数组。从作用上来说，包括了*单文件入*口和*多文件入口*两种方式
- 单文件入口
```
module.exports = {
    entry: 'path/to/my/entry/file.js'
};
// 或者使用对象方式
module.exports = {
    entry: {
        main: 'path/to/my/entry/file.js'
    }
};
```
