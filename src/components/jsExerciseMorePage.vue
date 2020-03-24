<template>
    <div id="jsExerciseMorePage" >
       <span style="color:red"> 提示：页面进来后直接f12看控制台，有一些代码返回的结果</span>
       <br/>
       <el-button type="primary" size="small" @click="verifyPush">验证数组push、shift、unshift</el-button>
       结论：(1)let value= arr.push():arr是增加后的数组，value是增加后数组的长度
           （2）let value=arr.shift():arr是移除原数组第一项后的数组，value是原数组第一项的值
            （3）let value=arr.unshift("hh"):arr是把hh增加到数组第一项后的数组，value是增加后的长度
    <br/>
    验证websocket
    <el-button @click="send">发消息</el-button>
    <br/>
    验证async、await、promise、resolve：getMessge
    <el-button @click="verifyInterface">验证(ps:方法里有接口,记得启动node服务)</el-button> {{testInterfaceData}}
    <br/>
    <br/>
    <el-button @click="verifyPromise">更深层次的研究promise</el-button>
    验证$notify
    <el-button @click="notify">验证</el-button>
    <br/>
     <el-button @click="notifyforEach">验证forEach</el-button>
    <!-- 测试merge ,master分支添加
    哈哈哈-->
     <br/>
       json数据格式和对象区别是：(1)json里的属性有""双引号;(2)json数据中不能有函数；JSON.stringify()把一个对象转为JSON字符串时，这个函数会自动去除对象中的函数<el-button @click="verifyJson"> 验证</el-button>
    <br/>
    <br/>
    检测数组元素中是否有元素符合指定条件：
    <button @click="testSome">测试 数组的some方法</button><span id="some"></span> &nbsp;&nbsp;&nbsp;<span id="some1"></span>
    &nbsp;&nbsp;&nbsp;<span id="some2"></span>
     <br/>
     <span style="color:red">5、js原型和原型链&nbsp;&nbsp;&nbsp;<a href="https://blog.csdn.net/lc237423551/article/details/80010100" target="_blank">学习链接</a></span>
     <br/>
     1、所有引用类型(函数、数组、对象)都拥有_proto_属性(隐式原型)
     <br/>
     2、所有函数都拥有prototype属性(显示原型)(仅限函数)
      <br/>
     3、实例继承构造函数的方法。
      <br/>
     4、可以把js里的函数当成一个类，new出来的就是实例对象。
      <br/>
     5、函数A有个属性名prototype,prototype指向的是对象B,B就是函数A的原型对象，简称原型。这个原型对象B，有个属性constructor指向了这个函数A，
       意思是说：constructor属性的值是函数A。
        <br/>
    6、hasOwnProperty()方法，可以判断一个属性是否来自对象本身。
     <br/>
    7、in 操作符，先在对象本身中找，如果找不到会去原型中找。
     <br/>
    8、js中所有的对象[function,Array,{}]都是Object的实例，并继承Object.prototype的属性和方法，也就是说，Object.prototype是所有对象的爸爸。
     <br/>
    9、_proto_指向的是这个对象的构照函数的prototype。
     <br/>
    10.凡是对象都只有一个属性那就是__proto__。
    <br/>
    11、<span style="color:red">原型链：</span>
    <br/>
    toString其实是Object.prototype里的方法。那么为什么所有对象都有toString方法，其实实例化对象本身是没有toString方法的。它会一层一层往上找。
    <br/>
    例如 构造函数A,A的实例对象AA,AA.__proto===A.prototype;A.prototype.__proto===Objec.prototype。
     <br/>
     12、js中给原型对象添加属性和方法
     <br/>方式一：给原型对象添加成员&nbsp;&nbsp;&nbsp;语法：构照函数.prototype.方法名=function(){}。
     <br/>方式二：替换原型对象（不是覆盖，而是替换，把原先的同名的直接替换成现在的）&nbsp;&nbsp;&nbsp;语法：构照函数.prototype.方法名={}。
     <br/>方式二不常用，因为这样会修改了原型本身。
     <br/>
     13、排序
     <button @click="testSort">测试排序</button>{{sortArr1}}<br/>
    <button @click="verifyYuanXing">验证原型和原型链</button>
    <br/>
    14.input:控制input里的值只能是正整数
    <el-input v-model="inputValue" ></el-input><el-button @click="verifyInput">验证input</el-button>
    <br/>
    15.测试字符串的length属性,以及空字符串是不是会报错？<el-button  type="primary"  @click="testLength"> 测试length</el-button>
    <br/>
    16.<el-button  type="primary"  @click="testLength"> 测试length</el-button>
    <br/>
    17.防抖与节流：防抖：触发高频事件后n秒内只有执行一次，如果n秒内高频事件再次被触发，则重新计算时间。
                 节流：持续触发scroll事件时，并不立即执行函数，而是每隔（）毫秒才会执行一次。
    <span style="color:red">(!!!!还未验证，待验证)</span>
    <div style="border:1px solid; width:80px;height:80px;overflow:auto" @scroll="doScroll">
      测试防抖  测试防抖  测试防抖  测试防抖  测试防抖  测试防抖  测试防抖  测试防抖  测试防抖  测试防抖  测试防抖
      测试防抖  测试防抖  测试防抖  测试防抖  测试防抖  测试防抖  测试防抖  测试防抖  测试防抖  测试防抖  测试防抖
      测试防抖  测试防抖  测试防抖  测试防抖  测试防抖  测试防抖  测试防抖  测试防抖  测试防抖  测试防抖  测试防抖
      测试防抖  测试防抖  测试防抖  测试防抖  测试防抖  测试防抖  测试防抖  测试防抖  测试防抖  测试防抖  测试防抖
    </div>
    </div>
</template>
<script>
var person1 = {
  toLocaleString: function () {
    return 'nick'
  },
  toString: function () {
    return 'nn'
  }
}
var person2 = {
  toLocaleString: function () {
    return 'greg'
  },
  toString: function () {
    return 'gr'
  }
}
var people = [person1, person2]
console.log('默认调用对象的toString方法：', people)
console.log('调用对象的toString方法：', people.toString())
console.log('调用对象的toLocaleString方法：', people.toLocaleString())
export default {
  data () {
    return {
      inputValue: '',
      arr: [],
      path: 'ws://192.168.0.200:8005/qrCodePage/ID=1/refreshTime=5',
      socket: '',
      testInterfaceData: '',
      testData: '',
      sortArr1: [3, 1, 4, 2]
    }
  },
  mounted () {
  },
  methods: {
    doScroll () {
    },
    // 防抖代码
    debounce (fn, delay) {
      let timeout = null
      return function (e) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
          fn.apply(this, arguments)
        }, delay)
      }
    },
    handle () {
      console.log('防抖:', Math.random())
    },
    // 测试length
    testLength () {
      console.log('第二次测试合并', 'dev分支')
      let ss = 'abcde'
      console.log('ss的长度是', ss.length)
      let ss1 = ''
      console.log('空字符串的长度是', ss1.length)
    },
    // 验证input
    verifyInput () {

    },
    // 测试排序
    testSort () {
      this.sortArr1.sort(this.sortBy)
    },
    sortBy (a, b) {
      let value1 = a - b
      console.log('a,b,a-b的值分别是', a, b, a - b)
      return value1
    },
    // 验证原型和原型链
    verifyYuanXing () {
      function A (a) {
        this.a = a
      }
      console.log('A是', A)
      console.log('A的原型是', A.prototype)
      // console.log('A.prototype.__proto__是', A.prototype.__proto__)
      console.log('Object.prototype是', Object.prototype)
      //  A.prototype.__proto === Object.prototype
      function B (b) {
        this.c = b
      }
      var bb = new B('lc')
      console.log('b是', bb)
      // console.log('b.__proto__===B.prototype的结果是', bb.__proto__ === B.prototype)
      let ss = {
        name: 'wxh',
        age: 26
      }
      console.log('ss是:', ss)
      // console.log('ss的__proto__属性是否和Object.protoType相等', ss.__proto__ === Object.prototype) // true
      console.log('Object是', Object)
      let ss1 = ['1']
      console.log('ss1是', ss1)
      // console.log('ss1的__proto__属性是否和Object.protoType相等', ss1.__proto__ === Object.prototype) //false
      // console.log('ss1的__proto__属性是否和Array.prototype相等', ss1.__proto__ === Array.prototype) // true
      // console.log('ss1的__proto__.__proto__属性是否和Object.protoType相等', ss1.__proto__.__proto__ === Object.prototype) // true
      var Book = function (id, bookname) {
        this.id = id
        this.bookname = bookname
      }
      // 注意两种不同给原型对象添加属性和方法的方式
      console.log('Book及Book的原型1是', Book, Book.prototype)
      Book.prototype.display = function () {
        console.log('哈哈哈')
      }
      console.log('Book及Book的原型2是', Book, Book.prototype)
      Book.prototype.display = {
        aa: '3'
      }
      console.log('Book及Book的原型3是', Book, Book.prototype)
      Book.prototype = {
        play: function () {
          console.log('嘻嘻')
        }
      }
      console.log('Book及Book的原型4是', Book, Book.prototype)
    },
    Person () {
      this.name = 'john'
    },
    testSome () {
      let ages = [3, 10, 18, 20]
      document.getElementById('some').innerHTML = ages.some((item) => {
        return item > 17
      })
      document.getElementById('some1').innerHTML = Array.from('RUNOOB')
      let str = 'hello world!'
      document.getElementById('some2').innerHTML = str.sup()
    },
    // 验证json和对象
    verifyJson () {
      let obj = {
        name: 'wan',
        age: 12,
        do: function () {
          console.log('哈哈哈哈')
        }
      }
      console.log('obj是', obj)
      let convertObj = JSON.stringify(obj)
      console.log('covertObj是', convertObj)
    },
    notifyforEach () {
      let arr = []
      arr.forEach(item => {
        console.log(item)
      })
    },
    notify () {
      this.$notify({
        title: 'Success',
        message: 'delete successfully',
        type: 'success'
      })
    },
    // init () {
    //   if (typeof (WebSocket) === 'undefined') {
    //     alert('您的浏览器不支持socket')
    //   } else {
    //     // 实例化soket
    //     this.socket = new WebSocket(this.path)
    //     // 监听socket连接
    //     this.socket.onopen = this.open()
    //     // 监听socket错误消息
    //     this.socket.onerror = this.error()
    //     // 监听socket消息
    //     this.socket.onmessage = this.getMessge()
    //   }
    // },
    getMessge () {

    },
    open () {
      console.log('socket连接成功')
    },
    error () {
      console.log('连接错误')
    },
    getMessage (msg) {
      console.log(msg.data)
    },
    send () {
      this.socket.send()
    },
    close () {
      console.log('socket已经关闭')
      console.log('测试souceTree 贮藏功能')
    },
    verifyPush () {
      let alength = this.arr.push('hah', 'heiehi')
      console.log('push操作返回来的是数组的length', alength)
      console.log('shift操作', this.arr.shift())
      console.log('shift操作后', this.arr)
      console.log('unshift操作', this.arr.unshift('wwww'))
      console.log('unshift操作后', this.arr)
    },
    async  getInfo () {
      console.log('开始调用getInfo方法')
      this.testData = await new Promise((resolve, reject) => {
        this.$axios('http://localhost:8081/info').then(res => {
          console.log('接口请求成功，接口返回来的结果是 ', res)
          resolve(res.data)
        }).catch(error => {
          console.log(error)
        })
      })
      console.log(this.testData)
      this.test()
    },
    verifyInterface () {
      this.getInfo()
    },
    test () {
      this.testInterfaceData = this.testData
      console.log('执行的代码')
    },
    verifyPromise () {

    }
  }
  // destroyed () {
  //   // 销毁监听
  //   this.socket.onclose = this.close()
  // }
}
</script>
<style lang="scss">
#jsExerciseMorePage{
    height: 100%;
    width:100%;
    padding: 20px;
  box-sizing: border-box;
}
</style>
