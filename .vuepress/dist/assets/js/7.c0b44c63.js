(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{353:function(r,n,a){"use strict";a.r(n);var t=a(43),e=Object(t.a)({},(function(){var r=this,n=r.$createElement,a=r._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[a("h1",{attrs:{id:"js算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js算法"}},[r._v("#")]),r._v(" JS算法")]),r._v(" "),a("h2",{attrs:{id:"冒泡排序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#冒泡排序"}},[r._v("#")]),r._v(" 冒泡排序")]),r._v(" "),a("ul",[a("li",[r._v("核心思想")])]),r._v(" "),a("p",[r._v("让数组中的当前项和后一项进行比较，如果当前项比后一项大，则两项交换位置（让大的靠后）即可")]),r._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[r._v("var arr = [2,3,1,8,7,6]\n\nfunction bubble(arr){\n    // 外层循环 i 控制比较的轮数 （例如：5个数的数组，只要循环4次，最后剩下一个不用比较）\n    for(let i = 0; i < arr.length - 1; i++){\n\n        // 里层循环每一轮控制比较的轮数 （扣掉自己： -1， 扣掉已经冒泡到最后的个数 i）\n        for(let j = 0; j < arr.length - 1 - i; j++){\n            let left = arr[j], right = arr[j+1];\n            if(arr[j]>arr[j+1]){\n                arr[j+1] = left;\n                arr[j] = right;\n            }\n        }\n    }\n    return arr\n}\n")])])]),a("h2",{attrs:{id:"插入排序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插入排序"}},[r._v("#")]),r._v(" 插入排序")]),r._v(" "),a("ul",[a("li",[r._v("核心思想")])]),r._v(" "),a("p",[r._v("\b以拿扑克牌为例, 每次摸新牌都和手里都牌从小到大进行比较，若新牌比手上的某张牌小，就在当前位置插入这张新牌，若比到最后手上没有比新牌大的，就把新牌放在最后。")]),r._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[r._v("function insert(arr){\n    var handle = [];\n    handle.push(arr[0])\n\n    for (let i = 1; i < arr.length; i++) {\n       for(let j = 0; j<handle.length; j++){\n        if(arr[i]<handle[j]){\n            handle.splice(j, 0, arr[i]);\n            break\n        }\n        handle.push(arr[i])\n       }\n        \n    }\n    return handle\n}\n")])])]),a("h2",{attrs:{id:"快速排序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速排序"}},[r._v("#")]),r._v(" 快速排序")]),r._v(" "),a("ul",[a("li",[r._v("核心思想")])]),r._v(" "),a("p",[r._v("从数组中拿出中间项，剩下的每一项和这个中间项比较，小的放左边，大的放右边，如此反复。")]),r._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[r._v("function quick(arr){\n    // 如果 arr 只有一个数或者没有，就返回本身\n    if(arr.length <= 1){\n        return arr\n    }\n     // 1. 找到数组中间项，并在原数组把它移除\n\n     let middleIndex = Math.floor(arr.length / 2)\n     let middleVal = arr.splice(middleIndex, 1)[0]\n\n     // 2. 准备左右两个数组，循环剩下数组中的每一项，比当前项小的放到左边数组，大的放到右边数组\n     let left = [], right = [];\n\n     for(let i = 0; i<arr.length; i++){\n        if(arr[i]<middleVal){\n            left.push(arr[i])\n        } else {\n            right.push(arr[i])\n        }\n     }\n     \n     // 递归\n     return quick(left).concat(middleVal, quick(right))\n}\n")])])])])}),[],!1,null,null,null);n.default=e.exports}}]);