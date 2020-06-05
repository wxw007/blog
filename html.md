# HTML 基础

## Doctype作用？标准模式与兼容模式各有什么区别?
1. 告知浏览器的解析器用什么文档标准解析这个文档。DOCTYPE不存在或格式不正确会导致文档以兼容模式呈现。
2. 标准模式的排版和JS运作模式都是以该浏览器支持的最高标准运行。在兼容模式中，页面以宽松的向后兼容的方式显示,模拟老式浏览器的行为以防止站点无法工作。


## HTML5 为什么只需要写<!DOCTYPE html> ？
HTML5不基于 SGML，因此不需要对DTD进行引用，但是需要doctype来规范浏览器的行为（让浏览器按照它们应该的方式来运行）。
而HTML4.01基于SGML,所以需要对DTD进行引用，才能告知浏览器文档所使用的文档类型。

## html5有哪些新特性？
1. 绘画 `canvas`
2. 用于媒体播放的 `video` 和 `audio` 
3. 用于本地离线存储的 localStorage 和 sessionStorage
4. 语义化更好的内容元素, 如 `artical`、 `footer`、 `header`、 `nav`、 `section`
5. 表单控件, calendar、date、time、email、url、search
6. 新的技术 webworker、websocket、Geolocation(获取用户的地理位置)