module.exports = {
    base: "/blog/",
    title: "虎皮猫的博客",
    description: "wxw",
    themeConfig: {
      displayAllHeaders: true, // 默认值：false
        nav: [
          { text: 'github', link: 'https://github.com/wxw007/learning-note' },
        ],
        sidebarDepth: 2,
        sidebar:[
            '/html',
            '/css',
            '/js',
            '/algorithm',
            '/vue',
            '/brower',
            '/webpack',
            '/webpack-system',
            '/optimization',
            '/git'
        ],
        // sidebar: [
        //     {
        //         title: 'HTML',
        //         children: [
        //             '/html'
        //         ]
        //     },
        //     {
        //         title: 'CSS',
        //         children: [
        //             '/css'
        //         ]
        //     },
        //     {
        //         title: 'JS基础',
        //         children: [
        //             '/js'
        //         ]
        //     },
        //     {
        //         title: 'VUE',
        //         children: [
        //             '/vue'
        //         ]
        //     },
        //     {
        //         title: 'JS设计模式',
        //         children: [
        //             '/design-pattern'
        //         ]
        //     },
        //     {
        //         title: 'JS算法',
        //         children: [
        //             '/algorithm'
        //         ]
        //     },
        //     {
        //         title: 'webpack',
        //         children: [
        //             '/webpack'
        //         ]
        //     },
        //     {
        //         title: 'node.js',
        //         children: [
        //             '/node'
        //         ]
        //     },
        //     {
        //         title: '浏览器相关',
        //         children: [
        //             '/brower'
        //         ]
        //     },
        //     {
        //         title: '性能优化',
        //         children: [
        //             '/optimization'
        //         ]
        //     },
        //     {
        //         title: 'git',
        //         children: [
        //             '/git'
        //         ]
        //     },
           
        //   ]
      }
}