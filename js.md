# JS基础

## js数据数据类型

1. 原始类型 **(6个)**
* boolean
* null
* undefined
* string
* number
* symbol

> 原始类型都是按值传递

2. 引用类型
* object

## 判断数据类型

* `typeof` 对于原始类型来说，除了 `null` 都可以显示正确的类型
* `typeof` 对于对象来说，除了函数都会显示 `object` ，所以说 `typeof` 并不能准确判断变量到底是什么类型

> `typeof` 只能判断原始类型

* `instanceof` 用来判断A是否为B的实例，表达式为：A `instanceof` B，如果A是B的实例，则返回true，否则返回false。 `instanceof` 检测的是原型，内部机制是通过判断对象的原型链中是否有类型的原型。

> `instanceof` 只能用来判断两个对象是否属于实例关系， 而不能判断一个对象实例具体属于哪种类型。

* `constructor` : ' '.constructor === String

> null 和 undefined 无constructor，这种方法判断不了。 如果自定义对象，开发者重写prototype之后，原有的constructor会丢失。

* `Object.prototype.toString()` toString()是Object的原型方法，调用该方法，默认返回当前对象的[[Class]]。这是一个内部属性，其格式为[object Xxx], 其中Xxx就是对象的类型。对于 `Object` 对象，直接调用toString()就能返回[object Object], 而对于其他对象，则需要通过call、apply来调用才能返回正确的类型信息。

 

``` 
Object.prototype.toString.call('') // [object String]
 ```

`Object.prototype.toString()` 是最推荐的

## this

### 普通函数

``` 
function foo() {
  console.log(this.a)
}
var a = 1
foo()

const obj = {
  a: 2,
  foo: foo
}
obj.foo()

const c = new foo()
```

* 对于直接调用 foo 来说，不管 foo 函数被放在了什么地方，this 一定是 window
* 对于 obj.foo() 来说，我们只需要记住，谁调用了函数，谁就是 this，所以在这个场景下 foo 函数中的 this 就是 obj 对象
* 对于 new 的方式来说，this 被永远绑定在了 c 上面，不会被任何方式改变 this

### 箭头函数

``` 
function a() {
  return () => {
    return () => {
      console.log(this)
    }
  }
}
console.log(a()()())
```

首先箭头函数其实是没有 this 的，箭头函数中的 this 只取决包裹箭头函数的第一个普通函数的 this。在这个例子中，因为包裹箭头函数的第一个普通函数是 a，所以此时的 this 是 window。另外对箭头函数使用 bind 这类函数是无效的。
å
最后种情况也就是 bind 这些改变上下文的 API 了，对于这些函数来说，this 取决于第一个参数，如果第一个参数为空，那么就是 window。

如果对一个函数进行多次 bind，那么上下文会是什么呢？

``` 
let a = {}
let fn = function () { console.log(this) }
fn.bind().bind(a)() // => ?
```

不管我们给函数 bind 几次，fn 中的 this 永远由第一次 bind 决定

### this的优先级

首先，new 的方式优先级最高，接下来是 bind 这些函数，然后是 obj.foo() 这种调用方式，最后是 foo 这种调用方式，同时，箭头函数的 this 一旦被绑定，就不会再被任何方式所改变。

![this流程图](./images/1.jpg)

## 闭包

### 什么是闭包？
闭包就是指有权访问另一个函数作用域中的变量的函数。外部函数调用之后其变量对象本应该被销毁，但闭包的存在使我们仍然可以访问外部函数的变量对象

``` 
例子: 闭包实现一个函数，每次调用返回值加1
function a(){
    var n = 1;
    return function(){
       return n++
    }
}
var b = a()

b() // 1
b() // 2
b() // 3
```

### 闭包的使用场景

1. 实现私有成员。
2. 保护命名空间，避免污染全局变量。
3. 缓存变量。

> 常见的用闭包解决循环打印数值一样的问题

### 使用闭包的注意事项

1. **内存泄漏** - 由于闭包会使得函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用闭包，否则会造成网页的性能问题
2. 如果内部函数的变量和外部函数的变量名相同时，那么内部函数再也无法指向外部函数那个同名的变量

## 浅拷贝、深拷贝

### 浅拷贝

1. `Object.assign` 
2. 扩展运算符 `...` 

### 深拷贝

通常用转字符串的方法进行深拷贝 `JSON.parse(JSON.stringify(object))` 。
但是此方法存在局限性

* 会忽略 `undefined` 
* 会忽略 `symbol` 
* 不能序列化函数
* 不能解决循环引用的对象

``` 
let obj = {
  a: 1,
  b: {
    c: 2,
    d: 3,
  },
}
obj.c = obj.b
obj.e = obj.a
obj.b.c = obj.c
obj.b.d = obj.b
obj.b.e = obj.b.c
let newObj = JSON.parse(JSON.stringify(obj))
console.log(newObj)  //报错
```

``` 
let a = {
  age: undefined,
  sex: Symbol('male'),
  jobs: function() {},
  name: 'yck'
}
let b = JSON.parse(JSON.stringify(a))
console.log(b) // {name: "yck"} 只剩下name
```

需要深拷贝推荐使用 [ lodash 的深拷贝函数](https://lodash.com/docs/4.17.15#cloneDeep)

## 原型和原型链

### 原型
每个 JS 对象都有 `__proto__` 属性，这个属性指向了原型，实例的 `__proto__` 属性(原型) 等于其构造函数的 `prototype` 。

### 原型链

对象的 ` __proto__` 属性指向原型， ` __proto__` 将对象和原型连接起来组成了原型链。

当在一个对象 obj 上访问某个属性时，如果不存在于 obj，那么便会去对象的原型也就是 `obj.__proto__ ` 上去找这个属性。如果有则返回这个属性，没有则去对象 obj 的原型的原型也就是 `obj.__proto__.__proto__` 去找，重复以上步骤。一直到访问纯对象的原型的原型 `{}.__proto.__proto__` ，也就是 `null` ，直接返回 `undefined` 。

### new 运算符做了什么

``` 
function F(){
  console.log('这是构造函数')
}

// new 做了以下四步
var obj = {}; // 1. 创建一个空对象 obj
obj.__proto__ = F.prototype; // 2. 将空对象的 __proto__ 指向F函数对象的prototype对象
F.call(obj); // 3. 将F函数的 this 指向 obj, 并执行 F
return obj; // 返回 obj

// 自己实现一个 new 方法 
function myNew(){
  var obj = {}; // 1. 创建一个空对象 obj
  var Constructor = [].shift.call(arguments) //2. 获取构造函数
  obj.__proto__ = Constructor.prototype; //3. 将空对象的 __proto__ 指向构造函数的prototype对象
  var result = Constructor.apply(obj, arguments); //4. 将 this 指向 obj, 并执行Constructor函数
  return typeof result === "object" ? result : obj;//5. 如果返回值是一个对象就返回该对象，否则返回构造函数的一个实例对象
}
```

## var、let、const 区别

* 函数提升优先于变量提升，函数提升会把整个函数挪到作用域顶部，变量提升只会把声明挪到作用域顶部。
* var 存在提升，我们能在声明之前使用。let、const 因为暂时性死区的原因，不能在声明前使用。
* var 在全局作用域下声明变量会导致变量挂载在 window 上，其他两者不会。
* let 和 const 作用基本一致，但是后者声明的变量不能再次赋值。

## 模块化

### 模块化的好处

* 解决命名冲突
* 提供复用性
* 提高代码可维护性

### 模块化的方式

1. 立即执行函数

在早期，使用立即执行函数实现模块化是常见的手段，通过函数作用域解决了命名冲突、污染全局作用域的问题。

``` 
(function(globalVariable){
   globalVariable.test = function() {}
   // ... 声明各种变量、函数都不会污染全局作用域
})(globalVariable)
```

2. AMD和CMD (现已比较少使用)

``` 
// AMD
define(['./a', './b'], function(a, b) {
  // 加载模块完毕可以使用
  a.do()
  b.do()
})
// CMD
define(function(require, exports, module) {
  // 加载模块
  // 可以把 require 写在函数体的任意地方实现延迟加载
  var a = require('./a')
  a.doSomething()
})
```

3. CommonJS

``` 
// a.js
module.exports = {
    a: 1
}
// or 
exports.a = 1

// b.js
var module = require('./a.js')
module.a // -> log 1
```

4. ES Module

``` 
// 引入模块 API
import XXX from './a.js'
import { XXX } from './a.js'
// 导出模块 API
export function a() {}
export default function() {}
```

## Proxy

Vue3.0 中将会通过 `Proxy` 来替换原本的 `Object.defineProperty` 来实现数据响应式。

``` 
let p = new Proxy(target, handler)
```

`target` 代表需要添加代理的对象， `handler` 用来自定义对象中的操作，比如可以用来自定义 `set` 或者 `get` 函数。

 Vue 中的响应式，需要我们在 get 中收集依赖，在 set 派发更新，之所以 Vue3.0 要使用 Proxy 替换原本的 API 原因在于 Proxy 无需一层层递归为每个属性添加代理，一次即可完成以上操作，性能上更好，并且原本的实现有一些数据更新不能监听到，但是 Proxy 可以完美监听到任何方式的数据改变，唯一缺陷可能就是浏览器的兼容性不好了。

 ## 数组遍历方法
 1.### 普通for循环

``` 
var arr = [1, 2, 3]
for(var i = 0; i < arr.length; i++) { // 这里的i是代表数组的下标
    console.log(i); // 0, 1, 2
};
```

2. ### 优化的 for 循环

``` 
var arr = [1, 2, 3]
for(var i = 0, len = arr.length; i < len; i++) { // 这里的i是代表数组的下标
console.log(i); // 0, 1, 2 };　
```

使用临时变量，将长度缓存起来，避免重复获取数组长度，当数组较大时优化效果才会比较明显。这种方法基本上是所有循环遍历方法中性能最高的一种，并且这一类型的for循环可以通过用break来中断循环。

3. ### for...of...遍历(这种遍历支持ES6)

``` 
var arr = [1, 2, 3]
for(var item of arr) { // item代表数组里面的元素
    console.log(item); // 1, 2, 3
};　
```

* 这是最简洁、最直接的遍历数组元素的语法

* 这个方法避开了for-in循环的所有缺陷

* 与forEach()不同的是，它可以正确响应break、continue和return语句

* 性能要好于forin，但仍然比不上普通for循环

4. ### forEach()

``` 
var arr = [1, 2, 3];
arr.forEach((item, index, arr) => { // item为arr的元素，index为下标，arr原数组
    console.log(item); // 1, 2, 3
    console.log(index); // 0, 1, 2
    console.log(arr); // [1, 2, 3]
});
```

这种遍历便捷还是挺便捷的，看起来优雅，对目标数组的操作很人性化，要元素给元素，要下标给下标，但是当某种情况你想**中断遍历**的时候，你就会感觉它就像鸡肋，食之无味，弃之可惜。由于foreach是Array型自带的，对于一些非这种类型的，无法直接使用(如NodeList)，所以才有了这个变种，使用这个变种可以让类似的数组拥有foreach功能。而且forEach的性能也会比普通的for循环弱。又下面的例子我们可以看到，我们常用的return false是可以终止代码继续往下执行的，但是在forEach遍历中，**并没有终止循环**，所以在用forEach的时候，要考虑使用场景了。

5. ### some()

``` 
var arr = [1, 2, 3];
arr.some((item, index, arr) => { // item为数组中的元素，index为下标，arr为目标数组
    console.log(item); // 1, 2, 3
    console.log(index); // 0, 1, 2
    console.log(arr); // [1, 2, 3]  
})
```

* some作为一个用来检测数组是否满足一些条件的函数存在，同样是可以用作遍历的函数签名同forEach，有区别的是当任一callback返回值匹配为true则会直接返回true，如果所有的callback匹配均为false，则返回false。

* some() 方法会依次执行数组的每个元素：

* 如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测。
* 如果没有满足条件的元素，则返回false。

6. ### every()

``` 
var arr = [1, 2, 3];
arr.every((item, index, arr) => { // item为数组中的元素，index为下标，arr为目标数组
    return item > 0; // true
    return index == 0; // false
})
```

* every() 方法用于检测数组所有元素是否都符合指定条件（通过函数提供）。
* every() 方法使用指定函数检测数组中的所有元素：
* 如果数组中检测到有一个元素不满足，则整个表达式返回 false ，且剩余的元素不会再进行检测。
* 如果所有元素都满足条件，则返回 true。

7. ### filter()

``` 
var arr = [1, 2, 3];
arr.filter(item => { // item为数组当前的元素
    return item > 1; // [2, 3]
})
```

* filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。

8. ### map()

``` 
var arr = [1, 2, 3];
arr.map(item => { // item为数组的元素
    console.log(item); // 1, 2, 3
    return item * 2; // 返回一个处理过的新数组[2, 4, 6]
})
```

* map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
* map() 方法按照原始数组元素顺序依次处理元素。
* 这种方式也是用的比较广泛的，虽然用起来比较优雅，但实际效率还比不上forEach

9. ### reduce()

`reduce` 可以将数组中的元素通过回调函数最终转换为一个值。

``` 
const arr = [1, 2, 3]
const sum = arr.reduce((acc, current) => acc + current, 0)
console.log(sum)
```

对于 `reduce` 来说，它接受两个参数，分别是回调函数和初始值。

reduce 过程

* 首先初始值为 0，该值会在执行第一次回调函数时作为第一个参数传入
* 回调函数接受四个参数，分别为累计值、当前元素、当前索引、原数组，后三者想必大家都可以明白作用，这里着重分析第一个参数
* 在一次执行回调函数时，当前值和初始值相加得出结果 1，该结果会在第二次执行回调函数时当做第一个参数传入
* 所以在第二次执行回调函数时，相加的值就分别是 1 和 2，以此类推，循环结束后得到结果 6

## 如何解决回调地狱问题？

### 回调函数引起调问题

* 嵌套函数存在耦合性，一旦有所改动，就会牵一发而动全身
* 嵌套函数一多，就很难处理错误

### 解决回调地狱的方法

1. Generator

`Generator` 最大的特点就是可以控制函数的执行

> 用得少，而且绕

2. Promise

三种状态

* 等待中 (pending)
* 完成了 (resolved)
* 拒绝了 (rejected)

这个承诺一旦从等待状态变成为其他状态就永远不能更改状态了，也就是说一旦状态变为 resolved 后，就不能再次改变。

`Promise` 实现了链式调用，也就是说每次调用 `then` 之后返回的都是一个 `Promise` ，并且是一个全新的 `Promise` ，原因也是因为状态不可变。如果你在 `then` 中 使用了 `return` ，那么 `return` 的值会被 `Promise.resolve()` 包装

3. async 及 await

之前写的一篇[《async/await》](https://juejin.im/post/5d89e9e1f265da03a049b982)

对比 `Promise` 的优点

* 优势在于处理 then 的调用链，能够更清晰准确的写出代码，毕竟写一大堆 then 也很恶心，并且也能优雅地解决回调地狱问题

缺点:

* 因为 `await` 将异步代码改造成了同步代码，如果多个异步代码没有依赖性却使用了 `await` 会导致性能上的降低

## event loop

### js单线程好处
JS 可以修改 DOM，如果在 JS 执行的时候 UI 线程还在工作，就可能导致不能安全的渲染 UI。

### 异步代码执行顺序

#### event loop 执行顺序

1. 首先执行同步代码，这属于宏任务
2. 当执行完所有同步代码后，执行栈为空，查询是否有异步代码需要执行
3. 执行所有微任务
4. 当执行完所有微任务后，如有必要会渲染页面

然5. 后开始下一轮 Event Loop，执行宏任务中的异步代码，也就是 setTimeout 中的回调函数

* 微任务包括 process.nextTick ，promise ，MutationObserver，其中 process.nextTick 为 Node 独有。
* 宏任务包括 script ， setTimeout ，setInterval ，setImmediate ，I/O ，UI rendering。

## call, apply, bind
作用: call、apply、bind的作用是改变函数运行时this的指向。

- `apply` 和 `call`: apply 和 call 的用法几乎相同, 唯一的差别在于：当函数需要传递多个变量时, apply 可以接受一个数组作为参数输入, call 则是接受一系列的单独变量。
- `bind`: 和call很相似，第一个参数是this的指向，从第二个参数开始是接收的参数列表。区别在于bind方法返回值是函数。

- 在 ES6 的箭头函数下, call 和 apply 将失效: 
  - 箭头函数体内的 this 对象, 就是定义时所在的对象, 而不是使用时所在的对象;所以不需要类似于var _this = this这种丑陋的写法
箭头函数不可以当作构造函数，也就是说不可以使用 new 命令。
  - 箭头函数不可以使用 arguments 对象,，该对象在函数体内不存在。 

## 垃圾回收机制
### 概念: 

垃圾回收机制(GC:Garbage Collection),执行环境负责管理代码执行过程中使用的内存。垃圾收集器会定期（周期性）找出那些不在继续使用的变量，然后释放其内存。但是这个过程不是实时的，因为其开销比较大，所以垃圾回收器会按照固定的时间间隔周期性的执行。

垃圾回收策略:

2种最为常用：标记清除和引用计数，其中标记清除更为常用。
- 标记清除: 当进入作用域时，进行标记，离开作用域时，标记并回收这些变量
- 引用计数是跟踪记录每个值被引用的次数。就是变量的引用次数，被引用一次则加1，当这个引用计数为0时，被视为准备回收的对象，每当过一段时间开始垃圾回收的时候，就把被引用数为0的变量回收。

### 内存泄漏
引起内存泄漏原因主要有:
1. 全局变量引起的内存泄露
2. 闭包引起的内存泄露：慎用闭包
3. dom清空或删除时，事件未清除导致的内存泄漏
4. 循环引用带来的内存泄露

### 如何减少垃圾回收开销
1. 在对象结束使用后 ，令obj = null。这样利于解除循环引用，使得无用变量及时被回收；
2. js中开辟空间的操作有new(), [ ], { }, function (){..}。最大限度的实现对象的重用；
3. 慎用闭包。闭包容易引起内存泄露。本来在函数返回之后，之前的空间都会被回收。但是由于闭包可能保存着函数内部变量的引用，且闭包在外部环境，就会导致函数内部的变量不能够销毁。

## 节流和防抖
### 节流
考虑一个场景，滚动事件中会发起网络请求，但是我们并不希望用户在滚动过程中一直发起请求，而是**隔一段时间发起一次**，对于这种情况我们就可以使用节流。
> 节流:  在某段时间内，不管你触发了多少次回调，我都只认第一次，并在计时结束时给予响应。

```
function log(){
    console.log('打印了')
}

// 节流
function jieliu(fn, delay){
    let canDo = 1;
   return function (){
    if(canDo){
        fn()
        canDo = 0;
        setTimeout(() =>{
            canDo = 1;
        }, delay) 
    } else {
        return
    }
   }  
}

// 调用
var body = document.querySelector("body");
body.addEventListener("scoll", function(){
    jieliu(log, 2000)
})
```


## #防抖
考虑一个场景，有一个按钮点击会触发网络请求，但是我们并不希望每次点击都发起网络请求，而是当用户点击按钮**一段时间后没有再次点击**的情况才去发起网络请求，对于这种情况我们就可以使用防抖。

> 防抖:  我会等你到底。在某段时间内，不管你触发了多少次回调，我都只认最后一次

```
function fangdou(fn, delay){
    let timer = null;
    return function() {
        if(timer){
            clearTimeout(timer)
        }
        timer = setTimeout(()=>{
            fn()
        }, delay)
    }
}
```