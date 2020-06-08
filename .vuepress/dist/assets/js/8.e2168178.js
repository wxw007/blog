(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{354:function(a,t,v){"use strict";v.r(t);var _=v(43),r=Object(_.a)({},(function(){var a=this,t=a.$createElement,v=a._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[v("h1",{attrs:{id:"浏览器相关"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#浏览器相关"}},[a._v("#")]),a._v(" 浏览器相关")]),a._v(" "),v("h2",{attrs:{id:"介绍一下对浏览器内核的理解"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#介绍一下对浏览器内核的理解"}},[a._v("#")]),a._v(" 介绍一下对浏览器内核的理解")]),a._v(" "),v("p",[a._v("浏览器内核主要分为2部分: 渲染引擎和JS引擎。")]),a._v(" "),v("ol",[v("li",[a._v("渲染引擎: 负责取得网页的内容（HTML、XML、图像等等）、整理讯息（例如加入CSS等），以及计算网页的显示方式，然后会输出至显示器或打印机。浏览器的内核的不同对于网页的语法解释会有不同，所以渲染的效果也不相同")]),a._v(" "),v("li",[a._v("JS引擎：解析和执行javascript来实现网页的动态效果。")])]),a._v(" "),v("blockquote",[v("p",[a._v("最开始渲染引擎和JS引擎并没有区分的很明确，后来JS引擎越来越独立，内核就倾向于只指渲染引擎")])]),a._v(" "),v("h2",{attrs:{id:"浏览器中输入url到网页显示，整个过程发生了什么"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#浏览器中输入url到网页显示，整个过程发生了什么"}},[a._v("#")]),a._v(" 浏览器中输入url到网页显示，整个过程发生了什么")]),a._v(" "),v("ol",[v("li",[a._v("域名解析")]),a._v(" "),v("li",[a._v("发起tcp三次握手")]),a._v(" "),v("li",[a._v("建立tcp连接之后发起htttp请求")]),a._v(" "),v("li",[a._v("服务器端响应http请求，浏览器得到html代码")]),a._v(" "),v("li",[a._v("浏览器器解析html代码，并请求html代码中的资源")]),a._v(" "),v("li",[a._v("浏览器对页面进行渲染呈现给用户")])]),a._v(" "),v("h2",{attrs:{id:"cookie-localstorage和sessionstorage的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cookie-localstorage和sessionstorage的区别"}},[a._v("#")]),a._v(" cookie, localStorage和sessionStorage的区别")]),a._v(" "),v("h3",{attrs:{id:"基本概念"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[a._v("#")]),a._v(" 基本概念")]),a._v(" "),v("ul",[v("li",[a._v("cookie: cookie非常小，它的大小限制在4kb左右，它的主要用于保存登陆信息")]),a._v(" "),v("li",[a._v("localStorage: 是HTML5标准中新加入的技术，存储不会因为页面关闭而丢失")]),a._v(" "),v("li",[a._v("sessionStorage: 是HTML5标准中新加入的技术，存储随着页面关闭而丢失")])]),a._v(" "),v("h3",{attrs:{id:"三者区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#三者区别"}},[a._v("#")]),a._v(" 三者区别")]),a._v(" "),v("ul",[v("li",[v("p",[a._v("数据上的生命周期的不同")]),a._v(" "),v("ul",[v("li",[a._v("cookie 一般由服务器生成，可设置失效时间，如果在浏览器端生成cookie，默认是关闭后失效")]),a._v(" "),v("li",[a._v("localStorage 除非被永久清除，否则永久保存")]),a._v(" "),v("li",[a._v("sessionStorage 仅在当前会话会有效，关闭页面或浏览器后被清除")])])]),a._v(" "),v("li",[v("p",[a._v("存放数据的大小不同")]),a._v(" "),v("ul",[v("li",[a._v("cookie 一般为4kb")]),a._v(" "),v("li",[a._v("localStorage 一般为5MB")]),a._v(" "),v("li",[a._v("sessionStorage 一般为5MB")])])]),a._v(" "),v("li",[v("p",[a._v("与服务器端通信不同")]),a._v(" "),v("ul",[v("li",[a._v("cookie 每次都会携带HTTP头中，如果使用cookie保存过多数据会带来性能问题")]),a._v(" "),v("li",[a._v("localStorage 仅在客户端（即浏览器）中保存，不参与和服务器的通信")]),a._v(" "),v("li",[a._v("sessionStorage 仅在客户端（即浏览器）中保存，不参与和服务器的通信")])])]),a._v(" "),v("li",[v("p",[a._v("易用性")]),a._v(" "),v("ul",[v("li",[a._v("cookie 需要程序员自己来封装，原生的cookie接口不够友好")]),a._v(" "),v("li",[a._v("localStorage 原生接口可以接受，可以封装来对Object和Array有更好的支持")]),a._v(" "),v("li",[a._v("sessionStorage 原生接口可以接受，可以封装来对Object和Array有更好的支持")])])])]),a._v(" "),v("h2",{attrs:{id:"跨域"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#跨域"}},[a._v("#")]),a._v(" 跨域")]),a._v(" "),v("h3",{attrs:{id:"概念"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[a._v("#")]),a._v(" 概念")]),a._v(" "),v("p",[a._v("因为浏览器出于安全考虑，有同源策略。也就是说，如果协议、域名或者端口有一个不同就是跨域，Ajax 请求会失败。")]),a._v(" "),v("h3",{attrs:{id:"解决跨域方法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#解决跨域方法"}},[a._v("#")]),a._v(" 解决跨域方法")]),a._v(" "),v("ol",[v("li",[a._v("JSONP")])]),a._v(" "),v("p",[a._v("JSONP 的原理很简单，就是利用 "),v("code",[a._v("<script>")]),a._v(" 标签没有跨域限制。通过 "),v("code",[a._v("<script>")]),a._v(" 标签指向一个需要访问的地址并提供一个回调函数来接收数据。")]),a._v(" "),v("p",[a._v("优点: 兼容性好")]),a._v(" "),v("p",[a._v("缺点: 只能发起 "),v("code",[a._v("get")]),a._v(" 请求")]),a._v(" "),v("ol",{attrs:{start:"2"}},[v("li",[a._v("CORS\n服务端设置 Access-Control-Allow-Origin 就可以开启 CORS。 该属性表示哪些域名可以访问资源，如果设置通配符则表示所有网站都可以访问资源。")])]),a._v(" "),v("p",[a._v("通过这种方式解决跨域问题的话，会在发送请求时出现两种情况，分别为"),v("strong",[a._v("简单请求")]),a._v("和"),v("strong",[a._v("复杂请求")]),a._v("。")]),a._v(" "),v("h4",{attrs:{id:"简单请求"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#简单请求"}},[a._v("#")]),a._v(" 简单请求")]),a._v(" "),v("ol",[v("li",[a._v("使用下列方法之一：")])]),a._v(" "),v("ul",[v("li",[v("p",[a._v("GET")])]),a._v(" "),v("li",[v("p",[a._v("HEAD")])]),a._v(" "),v("li",[v("p",[a._v("POST")])])]),a._v(" "),v("ol",{attrs:{start:"2"}},[v("li",[a._v("Content-Type 的值仅限于下列三者之一：")])]),a._v(" "),v("ul",[v("li",[v("p",[a._v("text/plain")])]),a._v(" "),v("li",[v("p",[a._v("multipart/form-data")])]),a._v(" "),v("li",[v("p",[a._v("application/x-www-form-urlencoded")])])]),a._v(" "),v("h4",{attrs:{id:"复杂请求"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#复杂请求"}},[a._v("#")]),a._v(" 复杂请求")]),a._v(" "),v("p",[a._v("对于复杂请求来说，首先会发起一个预检请求，该请求是 "),v("code",[a._v("option")]),a._v(" 方法的，通过该请求来知道服务端是否允许跨域请求。")]),a._v(" "),v("h2",{attrs:{id:"缓存机制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#缓存机制"}},[a._v("#")]),a._v(" 缓存机制")]),a._v(" "),v("p",[a._v("缓存可以说是性能优化中简单高效的一种优化方式了，它可以显著减少网络传输所带来的损耗。")]),a._v(" "),v("h3",{attrs:{id:"缓存位置"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#缓存位置"}},[a._v("#")]),a._v(" 缓存位置")]),a._v(" "),v("ol",[v("li",[a._v("Service Worker")]),a._v(" "),v("li",[a._v("Memory Cache")]),a._v(" "),v("li",[a._v("Disk Cache")]),a._v(" "),v("li",[a._v("Push Cache")]),a._v(" "),v("li",[a._v("网络请求")])]),a._v(" "),v("h3",{attrs:{id:"缓存策略"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#缓存策略"}},[a._v("#")]),a._v(" 缓存策略")]),a._v(" "),v("p",[a._v("通常浏览器缓存策略分为两种："),v("strong",[a._v("强缓存")]),a._v("和"),v("strong",[a._v("协商缓存")]),a._v("，并且缓存策略都是通过设置 HTTP Header 来实现的。")]),a._v(" "),v("h4",{attrs:{id:"强缓存"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#强缓存"}},[a._v("#")]),a._v(" 强缓存")]),a._v(" "),v("ol",[v("li",[a._v("Expires")])]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("Expires: Wed, 22 Oct 2018 08:41:00 GMT\n")])])]),v("p",[a._v("表示资源会在 Wed, 22 Oct 2018 08:41:00 GMT 后过期，需要再次请求。并且 Expires 受限于本地时间，如果修改了本地时间，可能会造成缓存失效。")]),a._v(" "),v("ol",{attrs:{start:"2"}},[v("li",[a._v("Cache-control")])]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("Cache-control: max-age=30\n")])])]),v("p",[a._v("Cache-Control 出现于 HTTP/1.1，优先级高于 Expires 。该属性值表示资源会在 30 秒后过期，需要再次请求。")]),a._v(" "),v("h4",{attrs:{id:"协商缓存"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#协商缓存"}},[a._v("#")]),a._v(" 协商缓存")]),a._v(" "),v("p",[a._v("如果缓存过期了，就需要发起请求验证资源是否有更新。协商缓存可以通过设置两种 HTTP Header 实现：Last-Modified 和 ETag 。")]),a._v(" "),v("h2",{attrs:{id:"浏览器渲染"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#浏览器渲染"}},[a._v("#")]),a._v(" 浏览器渲染")]),a._v(" "),v("h3",{attrs:{id:"为什么操作-dom-慢"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为什么操作-dom-慢"}},[a._v("#")]),a._v(" 为什么操作 DOM 慢")]),a._v(" "),v("p",[a._v("DOM 是属于渲染引擎中的东西，而 JS 又是 JS 引擎中的东西。当我们通过 JS 操作 DOM 的时候，其实这个操作涉及到了两个线程之间的通信，那么势必会带来一些性能上的损耗。操作 DOM 次数一多，也就等同于一直在进行线程之间的通信，并且操作 DOM 可能还会带来重绘回流的情况，所以也就导致了性能上的问题。")]),a._v(" "),v("h3",{attrs:{id:"重绘（repaint）和回流（reflow）"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#重绘（repaint）和回流（reflow）"}},[a._v("#")]),a._v(" 重绘（Repaint）和回流（Reflow）")]),a._v(" "),v("ul",[v("li",[a._v("重绘是当节点需要更改外观而不会影响布局的，比如改变 color 就叫称为重绘")]),a._v(" "),v("li",[a._v("回流是布局或者几何属性需要改变就称为回流。\n回流必定会发生重绘，重绘不一定会引发回流。回流所需的成本比重绘高的多。")])])])}),[],!1,null,null,null);t.default=r.exports}}]);