Vue  另外一个框架   3个框架  基本功 扎实



Vue ------尤雨溪（笔名） 设计师 40000
（使用的语法上来说它的设计是最优雅）

文档： 写的是英语， 中文（不确定） 推广（知乎）

avalon ---兼容ie6  司徒正美 github 3000

vue 权威指南：滴滴技术部（开发功能内部的前端项目）的前端团队

vue 学习了ng(多一些)/react

语法上简洁 优雅  双向数据绑定  组件化的开发  单向数据流

angular 重量级的框架


React 全家桶


vue在所有的框架中，最轻巧、简单、简洁、优雅
国内非常火

小巧的项目 可以选择vue去做

亮点，面试的时候可以发挥,极大的价值
（太大，最最重要的知识点）
function Debounce(func, wait){
    var timeout = null;
    return function(){
       var later = function(){
           func();
       }
       clearTimeout(timeout)
       timeout = setTimeout(later, wait||300)
    }
    //性能优化一大利器
}
//当用户进行频率过快操作时，优化代码性能
window.addEventListener('resize', Debounce(function(){
   console.log('窗口大小发生了改变')
<<<<<<< .mine
}), 500)||||||| .r91
}), 500)


vue 与 ng 它们都是实现了双向数据绑定，但是它们的原理不一样


ng 可以进行动态的双向数据绑定（脏检测机制）

vue 就只能进行静态的双向数据绑定（ES5 defineProptry）

总之： vue双向数据绑定相对于ng来说，要弱, 但写起来要简洁很多

Array push/slice/splice/pop...去改变我们的数组

ng的体积 是 vue体积 5倍 小巧=======
}), 500)


vue 与 ng 它们都是实现了双向数据绑定，但是它们的原理不一样


ng 可以进行动态的双向数据绑定（脏检测机制）

vue 就只能进行静态的双向数据绑定（ES5 defineProptry）

总之： vue双向数据绑定相对于ng来说，要弱, 但写起来要简洁很多

Array push/slice/splice/pop...去改变我们的数组

ng的体积 是 vue体积 5倍 小巧

1. Debounce（必背）

2. vue与ng双向数据绑定区别

3. 灵活的使用vue双向数据绑定以及计算属性

vue 双向数据绑定的原理？ （必会，很简单）
核心：es5的方法 Object.defineProperty()
/*
vue 它在ie9以上浏览器运行
es5方法： arr.map arr.forEach arr.filter

Object.create()
*/
var obj = {}
//为对象属性赋值有3种方法
1.属性静态赋值：
obj.name = 'gyf'
2.属性动态赋值：
var t = 'name';
obj[t] = 'gyf';

Object.defineProperty(obj, 'name', {
   value: 'I am name'
});
console.log(obj.name); //I am name
//怎么模仿const(不可写入)这个变量的行为
obj.name = 1;
期望 obj.name---> I am name
Object.defineProperty(obj, 'name', {
   value: 'I am name',
   writable: false //可写入/不可写入
   enumerable: false //该属性是否可枚举（遍历）
});

//关键之处：强大的能力： get/set方法
var list = [1,2,3,4,5]
Object.defineProperty(obj, 'list', {
   get: function(){
        return list
   },
   set: function(newvalue){
       //render()
       console.log(newvalue);
       //list.push()
       console.log('执行我们渲染视图的方法');      
   }
});



>>>>>>> .r93
