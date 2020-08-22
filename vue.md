# vue

## 生命周期钩子函数

在 `beforeCreate` 钩子函数调用的时候，是获取不到 `props` 或者 `data` 中的数据的，因为这些数据的初始化都在 `initState` 中。

然后会执行 `created` 钩子函数，在这一步的时候已经可以访问到之前不能访问到的数据，但是这时候组件还没被挂载，所以是看不到的。

接下来会先执行 `beforeMount` 钩子函数，开始创建 `VDOM，最后执行`  `mounted` 钩子，并将 `VDOM` 渲染为真实 `DOM` 并且渲染数据。组件中如果有子组件的话，会递归挂载子组件，只有当所有子组件全部挂载完毕，才会执行根组件的挂载钩子。

接下来是数据更新时会调用的钩子函数 `beforeUpdate` 和 `updated` ，这两个钩子函数没什么好说的，就是分别在数据更新前和更新后会调用。

另外还有 `keep-alive` 独有的生命周期，分别为 `activated` 和 `deactivated` 。用 `keep-alive` 包裹的组件在切换时不会进行销毁，而是缓存到内存中并执行 `deactivated` 钩子函数，命中缓存渲染后会执行 `actived` 钩子函数。

最后就是销毁组件的钩子函数 `beforeDestroy` 和 `destroyed` 。前者适合移除事件、定时器等等，否则可能会引起内存泄露的问题。然后进行一系列的销毁操作，如果有子组件的话，也会递归销毁子组件，所有子组件都销毁完毕后才会执行根组件的 `destroyed` 钩子函数。

## 组件中 data 什么时候可以使用对象

组件复用时所有组件实例都会共享 `data` ，如果 `data` 是对象的话，就会造成一个组件修改 `data` 以后会影响到其他所有组件，所以需要将 `data` 写成函数，每次用到就调用一次函数获得新的数据。

当我们使用 `new Vue()` 的方式的时候，无论我们将 `data` 设置为对象还是函数都是可以的，因为 `new Vue()` 的方式是生成一个根组件，该组件不会复用，也就不存在共享 `data` 的情况了。

## keep-alive 实现原理

* 首先，你要知道Vue.js内部将DOM节点抽象成了一个个的VNode节点。所以，keep-alive的缓存也是基于VNode节点的而不是直接存储DOM结构。
* 其实就是将需要缓存的VNode节点保存在this.cache中／在render时, 如果VNode的name符合在缓存条件（可以用include以及exclude控制），则会从this.cache中取出之前缓存的VNode实例进行渲染。

## 事件修饰符

* stop
* prevent
* capture
* self
* once
* passive
* once
* async

``` 
<!-- 阻止单击事件继续传播 -->
<a v-on:click.stop="doThis"></a>

<!-- 提交事件不再重载页面 -->
<form v-on:submit.prevent="onSubmit"></form>

<!-- 修饰符可以串联 -->
<a v-on:click.stop.prevent="doThat"></a>

<!-- 只有修饰符 -->
<form v-on:submit.prevent></form>

<!-- 添加事件监听器时使用事件捕获模式 -->
<!-- 即内部元素触发的事件先在此处理，然后才交由内部元素进行处理 -->
<div v-on:click.capture="doThis">...</div>

<!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
<!-- 即事件不是从内部元素触发的 -->
<div v-on:click.self="doThat">...</div>

<!-- 点击事件将只会触发一次 -->
<a v-on:click.once="doThis"></a>
```

## 组件通信

### 父子组件通信
1.props: 父组件通过 `props` 传递数据给子组件，子组件通过 `emit` 发送事件传递数据给父组件，这两种方式是最常用的父子通信实现办法。

> `v-model` , `.async` 修饰符都是语法糖，原理还是子组件派发事件

### 兄弟组件通信

1. vuex
2. eventBus

eventBus的原理是引入一个新的vue实例，然后通过分别调用这个实例的事件触发和监听来实现通信和参数传递

### 跨多层次组件通信

1. `provide / inject` 

## computed 和 watch 区别

* computed 是计算属性，依赖其他属性计算值，并且 computed 的值有缓存，只有当计算值变化才会返回内容。
* watch 监听到值的变化就会执行回调，在回调中可以进行一些逻辑操作。

需要依赖别的属性来动态获得值的时候可以使用 computed，对于监听到值的变化需要做一些复杂业务逻辑的情况可以使用 watch。

## vue响应式原理

`Object.defineProperty()` 来劫持各个属性的 `setter / getter` ，在数据变动时发布消息给订阅者，触发相应的监听回调。

## 什么是 MVVM，与 MVC 有什么区别

### MVVM
MVVM是Model-View-ViewModel的简写。即模型-视图-视图模型。【模型】指的是数据。【视图】指的是所看到的页面。【视图模型】mvvm模式的核心，它是连接view和model的桥梁。

在MVVM的框架下视图和模型是不能直接通信的。它们通过ViewModel来通信，ViewModel通常要实现一个observer观察者，当数据发生变化，ViewModel能够监听到数据的这种变化，然后通知到对应的视图做自动更新，而当用户操作视图，ViewModel也能监听到视图的变化，然后通知数据做改动

### MVC

MVC是Model-View- Controller的简写。即模型-视图-控制器。M和V指的意思和MVVM中的M和V意思一样。C即Controller指的是页面业务逻辑。使用MVC的目的就是将M和V的代码分离。‘MVC是单向通信。也就是View跟Model，必须通过Controller来承上启下。

### MVC 和 MVVM 对比

* MVC模式需要频繁的操作DOM，这样页面就有大量DOM绑定与监听类的操作。
* MVVM通过 `数据双向绑定` 让数据自动地双向同步，V修改数据自动同步M、M修改数据自动同步到V

## v-model 原理

`v-model` 是语法糖， 默认会利用名为 value 的 prop 和名为 input 的事件，通过子组件派发事件，父组件监听事件，改变对应的值，然后传回给子组件。

`model` 选项可以自定义需要绑定的变量名和事件名

``` 
model: {
    prop: 'checked',
    event: 'change'
  }
```

## $nextTick

`nextTick` 可以让我们在下次 DOM 更新循环结束之后执行延迟回调，用于获得更新后的 DOM

## vue-router 知识点

### vue-router有哪几种导航钩子（ 导航守卫 ）？

1. 全局守卫： router.beforeEach
2. 全局解析守卫： router.beforeResolve
3. 全局后置钩子： router.afterEach
4. 路由独享的守卫： beforeEnter
5. 组件内的守卫： beforeRouteEnter、beforeRouteUpdate (2.2 新增)、beforeRouteLeave

### hash 模式和 history 模式

#### hash 模式
#后面 hash 值的变化，并不会导致浏览器向服务器发出请求，浏览器不发出请求，也就不会刷新页面。每次 hash 值的变化，会触发hashchange 这个事件，通过这个事件我们就可以知道 hash 值发生了哪些变化。然后我们便可以监听hashchange来实现更新页面部分内容的操作

#### history 模式

history模式则会将URL修改得就和正常请求后端的URL一样, 如后端没有配置对应/user/id的路由处理，则会返回404错误。

> 当用户刷新页面之类的操作时，浏览器会给服务器发送请求，所以这个实现需要服务器的支持，需要把所有路由都重定向到 `根页面` 。

## v-for 为何使用 key
### 为什么要用 key
 因为 diff 算法中 用 `tag` 和 `key` 来判断是不是相同的节点，从而减少渲染次数，提升渲染性能。


### 用什么作为 key
1. 不能用 index 或者 random(随机数) 作为 key。
2. 最好用数据中不变的部分，例如每条数据的 `id` 来作为 key。

> 如果用 index 等作为 key, 其实和没加 key 一样。

## vue 常用性能优化
1. 合理使用 `v-show` 和 `v-if`。
2. 合理使用 `computed`。
3. `v-for` 加 `key` 。
4. 自定义事件，DOM事件要及时销毁。
5. 合理使用异步组件。
6. 合理使用 `keep-alive` .在一些不需要重复渲染的地方使用。
7. `data` 层级不要太深。