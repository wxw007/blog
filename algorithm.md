# JS算法

## 冒泡排序
- 核心思想

让数组中的当前项和后一项进行比较，如果当前项比后一项大，则两项交换位置（让大的靠后）即可
```
var arr = [2,3,1,8,7,6]

function bubble(arr){
    // 外层循环 i 控制比较的轮数 （例如：5个数的数组，只要循环4次，最后剩下一个不用比较）
    for(let i = 0; i < arr.length - 1; i++){

        // 里层循环每一轮控制比较的轮数 （扣掉自己： -1， 扣掉已经冒泡到最后的个数 i）
        for(let j = 0; j < arr.length - 1 - i; j++){
            let left = arr[j], right = arr[j+1];
            if(arr[j]>arr[j+1]){
                arr[j+1] = left;
                arr[j] = right;
            }
        }
    }
    return arr
}
```

## 插入排序
- 核心思想

以拿扑克牌为例, 每次摸新牌都和手里都牌从小到大进行比较，若新牌比手上的某张牌小，就在当前位置插入这张新牌，若比到最后手上没有比新牌大的，就把新牌放在最后。

```
function insert(arr){
    var handle = [];
    handle.push(arr[0])

    for (let i = 1; i < arr.length; i++) {
       for(let j = 0; j<handle.length; j++){
        if(arr[i]<handle[j]){
            handle.splice(j, 0, arr[i]);
            break
        }
        handle.push(arr[i])
       }
        
    }
    return handle
}
```

## 快速排序
- 核心思想

从数组中拿出中间项，剩下的每一项和这个中间项比较，小的放左边，大的放右边，如此反复。

```
function quick(arr){
    // 如果 arr 只有一个数或者没有，就返回本身
    if(arr.length <= 1){
        return arr
    }
     // 1. 找到数组中间项，并在原数组把它移除

     let middleIndex = Math.floor(arr.length / 2)
     let middleVal = arr.splice(middleIndex, 1)[0]

     // 2. 准备左右两个数组，循环剩下数组中的每一项，比当前项小的放到左边数组，大的放到右边数组
     let left = [], right = [];

     for(let i = 0; i<arr.length; i++){
        if(arr[i]<middleVal){
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
     }
     
     // 递归
     return quick(left).concat(middleVal, quick(right))
}
```
