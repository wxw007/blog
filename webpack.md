# webpack 知识


## 减少 webpack 打包时间

1. 优化 loader
优化 Loader 的文件搜索范围

2. HappyPack (插件)
HappyPack 可以将 Loader 的同步执行转换为并行的，这样就能充分利用系统资源来加快打包效率

3. DllPlugin (插件)
DllPlugin 可以将特定的类库提前打包然后引入。这种方式可以极大的减少打包类库的次数，只有当类库更新版本才有需要重新打包，并且也实现了将公共代码抽离成单独文件的优化方案。

4. 代码压缩
Webpack4 中，我们就不需要以上这些操作了，只需要将 mode 设置为 production 就可以默认开启以上功能

## 减小 webpack 打包后的体积
1. Scope Hoisting
Scope Hoisting 会分析出模块之间的依赖关系，尽可能的把打包出来的模块合并到一个函数中去

```
// webpack4 只需这样配置
module.exports = {
  optimization: {
    concatenateModules: true
  }
}
```
2. Tree Shaking
Tree Shaking 可以实现删除项目中未被引用的代码, 如果你使用 Webpack 4 的话，开启生产环境就会自动启动这个优化功能。



