<template>
  <div class="js-exercise">
    <div style="width:20%;height;100%">
     <span style="font-size:18px;color:red"> 目录: </span>
      <ol>
        <li>
        <a href="#exercise1">杂乱练习</a>
        </li>
        <li>
        <a href="#exercise2">浏览器对象练习</a>
        </li>
         <li>
        <a href="#numberExtend">数值扩展</a>
        </li>
         <li>
        <a href="#functionExtend">函数扩展</a>
        </li>
         <li>
        <a href="#arrayExtend">数组扩展</a>
        </li>
          <li>
        <a href="#symbol">Symbol</a>
        </li>
          <li>
        <a href="#setAndMap">set和map数据结构</a>
        </li>
      </ol>
    </div>
    <div style="width:80%;height:100%">
      <div id="exercise1">
         <router-link to="/">返回主页</router-link>
         <router-link to="/ES6ExercisePage">Es6更多练习</router-link>
         <hr/>
        <span style="color:red"> 杂乱练习:</span>
        <div>
          <el-button type="primary" @click="test">测试v-if与v-show</el-button>
          <span v-if="trueT">v-if</span>
          <span v-show="trueT">v-show</span>
          <el-button type="primary" @click="clickC($event)">测试event</el-button>
          <span ref="msgDiv">{{msg}}</span>
          <div v-if="msg1">Message got outside $nextTick: {{msg1}}</div>
          <div v-if="msg2">Message got inside $nextTick: {{msg2}}</div>
          <el-button type="primary" @click="nextTick()">测试$nextTick方法</el-button>
          <li class="list-group-item" v-for="(item,index) in menuItems" :key="item.index" @click="addClass(index)" :class="{'activeClass':position === index}">{{item}}</li>
        </div>
        <hr/>
        <div id="exercise2">
          <span style="color:red"> 浏览器对象练习：</span>
          <div>
            测试setInterval与clearInterval:
            <el-input :value="realTime" style="width:50%"></el-input>
            <span @click="stop">停止时间</span>
          </div>
          浏览器的名称:{{appName}}, 屏幕的宽/高：{{screenWidth}}/{{screenHight}} 屏幕可用宽/高: {{availWidth}}/{{availHight}}
        </div>
        <hr/>
        <div>
        </div>
      </div>
      <div id="ES6">
        <span style="color:red;font-size:18px">ES6学习笔记：</span>
        Babel：ES6转码器，将ES6转为ES5代码
        <el-button type="primary" @click="testLetAndVar"> 测试let和Var</el-button>
        <el-button type="primary" @click="testValue"> 变量的解构赋值</el-button>
        <el-button type="primary" @click="newMethodsOfString"> 字符串的新增方法：includes(),startsWith(),endsWith(),repeat(),trimStart(),trimEnd()</el-button>
        <el-button type="primary" @click="verifyRegExp">正则表达式(还未学习!!!）</el-button>
        <br/>
        <div id="numberExtend">
          <span style="color:red"> 1、数值的扩展：</span>
          （1）二进制和八进制分别用0b和0o表示。 （2）Number.isFinite,Number.isNaN分别用来检验数值是否是有限和是否为NaN
          <el-button type="primary" size="small" @click="checkNumber">验证</el-button>
          (3)es6将parseInt()和parseFloat，移植到Number对象上面。保持不变 ES5是parseInt("12.34"),Es6是Number.parseInt("12.34") (4)Number.isInteger:用来判断一个数值是否是整数，值得注意的是，整数和浮点数采用的是同样的储存方法，所以25和25.0被视为同一个值。
          <el-button type="primary" size="small" @click="checkNumber1">验证</el-button>
          (5)Math对象的扩展 Math.trunc():除去一个小数的小数部分，返回整数部分。对于非数值，会直接内部使用Number方法将其先转为数值。对于空值和无法截取整数的值，返回NaN。 Math.sign()方法用来判断一个数到底是正数、负数、还是零。对于非数值，会先其转为数值。 参数为正数，返回+1；参数为负数，返回-1；参数为0，返回0；参数为-0，返回-0；其他值，返回NaN。
          <el-button type="primary" size="small" @click="checkNumber2">验证</el-button>
          Math.cbrt()： Math.cbrt方法用于计算一个数的立方根。 Math.hypot(): 返回所有参数的平方根和的平方根。
          <br/>
        </div>
        <div id="functionExtend">
          <span style="color:red"> 2、函数的扩展: </span>
          (1)es6允许为函数的参数设置默认值，即直接写在参数定义的后面。 (2)与解构赋值默认值结合使用
          <el-button type="primary" size="small" @click="checkFunction">验证</el-button>
          (3)函数的length属性：返回没有指定默认值的参数个数。 (4)箭头函数 :Es6允许使用箭头 (=>)定义函数。
        </div>
        <div id="arrayExtend">
          <span style="color:red"> 3、数组的扩展: </span>
          (1)扩展运算符：就是(...)
          <el-button type="primary" size="small" @click="checkArray">验证</el-button>
          (2)复制数组：数组是复合的数据类型，直接复制的话，只是复制了指向底层数据结构的指针，而不时克隆一个全新的数组。
          <el-button type="primary" size="small" @click="checkArray1">验证（复制数组）</el-button>
          <el-button type="primary" size="small" @click="checkArray2">验证（合并数组）</el-button>
          (3)Array.from():该方法两类对象转为真正的数组：类似数组的对象和可遍历的对象
          <el-button type="primary" size="small" @click="checkArray3">验证</el-button>
          (4)Array.of():将一组值，转换为数组。 (5)find和findIndex():find方法用于找出第一个符合条件的数组成员。findIndex返回索引
          <el-button type="primary" size="small" @click="checkArray4">验证</el-button>
          (6)fill方法使用给定值，填充一个数组。['a','b','c'].fill(7,1,2):1,2分别代表填充的起始位置和结束位置。不填就默认全部代替
          <el-button type="primary" size="small" @click="checkArray5">验证</el-button>
          (7)数组的entries(),keys(),values():keys是对健名的遍历，values是对健值的遍历，entries是对键值对的遍历 (8)includes()；返回一个布尔值，表示某个数组是否包含给定的值
        </div>
        <div id="symbol">
          <span style="color:red"> 6、Symbol: 它是javaScript语言的第七种数据类型</span>
          symbol是一种类似于字符串的数据类型。
          <el-button type="primary" size="small" @click="checkSymbol">验证</el-button>
        </div>
        <div id="setAndMap">
          <span style="color:red"> 7、set 和 map数据结构</span>
          （1）set 类似于数组，但是成员的值都是唯一的，没有重复的值
          <el-button type="primary" size="small" @click="checkSet">验证</el-button>
          (2)set有keys()、values()、entries()、forEach()方法 (3)map的属性和操作方法：size属性、set(key,value)、get(key)、has(Key)、delet(key)、clear()：清除所有成员、没有返回值 (4)与其他数据结构的互相转换：Map转为数组、数组转为Map、map转为对象、对象转为map、map转为json、json转为map

        </div>
      </div>
    </div>
  </div>
</template>
<script>
import moment from 'moment'
export default {
  data () {
    return {
      msg: 'A',
      trueT: false,
      msg1: '',
      msg2: '',
      msg3: '',
      menuItems: ['哈哈', '嘻嘻', '啊哦'],
      position: '',
      currentTime: '',
      realTime: '',
      appName: '',
      navigator: '',
      screenHight: '',
      screenWidth: '',
      availHight: '',
      availWidth: ''
    }
  },
  mounted () {
    this.navigator = navigator
    console.log('navigator是', this.navigator)
    this.appName = navigator.appName
    this.screenHight = screen.height
    this.screenWidth = screen.width
    this.availHight = screen.availHeight
    this.availWidth = screen.availWidth
    // 设置定时器
    this.currentTime = setInterval(() => {
      this.realTime = this.formatDate(new Date())
    }, 1000)
    // 获取历史对象
    let historyInformation = history
    console.log('历史记录是', historyInformation)
  },
  methods: {
    // 测试let and var
    testLetAndVar () {
      var a = []
      var b = []
      for (var i = 0; i < 10; i++) {
        a[i] = function () {
          console.log('i声明为var时', i)
        }
      }
      for (let i = 0; i < 10; i++) {
        b[i] = function () {
          console.log('i声明为let时', i)
        }
      }
      a[6]()
      b[6]()
    },
    // 变量的解构赋值
    testValue () {
      // 数组解构赋值
      let [a, b, c] = [[], [], []]
      console.log('a,b,c的值分别是', a, b, c)
      // 对象解构赋值
      let { foo, bar } = { foo: 'aaa', bar: 'bbb' }
      console.log('foo,bar的值分别是', foo, bar)
      // 字符串的解构赋值
      let [aa, bb, cc, dd] = 'hello'
      console.log('aa,bb,cc,dd的值是', aa, bb, cc, dd)
      let { length: len } = 'hello'
      console.log('len是', len)
      // 函数参数的解构赋值
      function add ([x, y]) {
        return x + y
      }
      console.log('函数参数解构赋值', add([1, 2]))
    },
    // 字符串新增的方法
    newMethodsOfString () {
      let str =
        'hello,welcome to chongqing,nice to meet you ,I am your tourist guide'
      let ss = str.includes('hello')
      let sw = str.includes('hello', 10)
      console.log('字符串中是否包含了hello', ss)
      console.log('从第10个字符开始，字符串中是否包含了hello', sw)
      let ss1 = str.startsWith('hello')
      let sw1 = str.includes('hello', 10)
      console.log('字符串是否以hello开头', ss1)
      console.log('从第10个字符开始，字符串是否以hello开头', sw1)
      let ss2 = str.endsWith('hello')
      let sw2 = str.includes('hello', 10)
      console.log('字符串是否以hello结尾', ss2)
      console.log('前10个字符中，字符串是否以hello结尾', sw2)

      let sr = 'hello'.repeat(3)
      console.log('hello重复3次后的字符串是', sr)
    },
    stop () {
      clearInterval(this.currentTime)
    },
    formatDate (date) {
      return moment(new Date(date)).format('YYYY-MM-DD hh:mm:ss')
    },
    test () {
      if (this.trueT === false) {
        this.trueT = true
      } else {
        this.trueT = false
      }
    },
    clickC (e) {
      console.log('event的值是,', e)
    },
    nextTick () {
      this.msg = 'Hello world.'
      this.msg1 = this.$refs.msgDiv.innerHTML
      this.$nextTick(() => {
        this.msg2 = this.$refs.msgDiv.innerHTML
      })
    },
    // 验证正则表达式
    verifyRegExp () {
      alert('如有时间，请学习')
    },
    // 验证数值
    checkNumber () {
      console.log(
        "Number.isFinite(15),Number.isFinite('15')返回来的结果分别是:",
        Number.isFinite(15),
        Number.isFinite('15')
      )
    },
    checkNumber1 () {
      console.log(
        'Number.isInteger(25),Number.isInteger(25.1)返回来的结果分别是：',
        Number.isInteger(25),
        Number.isInteger(25.1)
      )
      console.log(
        'Number.isInteger(25),Number.isInteger(25.0)返回来的结果分别是：',
        Number.isInteger(25),
        Number.isInteger(25.0)
      )
    },
    checkNumber2 () {
      console.log("Math.sign('')返回的结果是：", Math.sign(''))
      console.log('Math.sign(true)返回的结果是：', Math.sign(true))
      console.log('Math.sign(false)返回的结果是：', Math.sign(false))
      console.log('Math.sign(null)返回的结果是：', Math.sign(null))
      console.log('Math.sign("9")返回的结果是：', Math.sign('9'))
      console.log('Math.sign("hhh")返回的结果是：', Math.sign('hhh'))
    },
    // 验证函数，与解构赋值默认值结合使用
    checkFunction () {
      this.checkFunction1({})
      this.checkFunction1({ x: 1 })
      this.checkFunction1({ x: 1, y: 2 })
      this.checkFunction1() // 这种方式会报错，因为只使用了对象的解构赋值默认值，没有使用函数参数的默认值
      this.checkFunction2() // 这种方式时，如果没有提供参数，则checkFunction2的参数默认为一个空对象
    },
    checkFunction1 ({ x, y = 5 }) {
      console.log('x,y的值分别是：', x, y)
    },
    checkFunction2 ({ x, y = 5 } = {}) {
      console.log('x,y的值分别是：', x, y)
    },
    // 验证数组
    checkArray () {
      console.log('...[1,2,3]返回来的结果是：', ...[1, 2, 3])
    },
    // 复制数组
    checkArray1 () {
      const a1 = [1, 2]
      const a2 = a1
      a2[0] = 2
      console.log('a1,a2的值分别是：', a1, a2) // a1也会发生改变，因为a2并不是a1的克隆，而是指向同一份数据的另一个指针。
      const a3 = [3, 4]
      const a4 = a3.concat()
      a4[0] = 0
      console.log('a3,a4的值分别是：', a3, a4)
    },
    // 合并数组
    checkArray2 () {
      const arr1 = ['a', 'b']
      const arr2 = ['c']
      const arr3 = ['d', 'e']
      // es5的合并数组(浅拷贝)
      let arrarr = arr1.concat(arr2, arr3)
      // es6的合并数组（浅拷贝）
      let arr = [...arr1, ...arr2, ...arr3]
      console.log('合并后的arr,arr1分别是:', arr, arrarr)
    },
    // 验证array.from()
    checkArray3 () {
      let arrayLike = {
        '0': 'a',
        '1': 'b',
        '2': 'c',
        length: 3
      }
      var arr = Array.from(arrayLike)
      console.log('返回来的arr是:', arr)
    },
    // 验证find方法
    checkArray4 () {
      console.log(
        '[1, 2, -5, -4].find((n) => n < 0)和[1, 2, -5, -4].findIndex((n) => n < 0)返回来的结果是',
        [1, 2, -5, -4].find(n => n < 0),
        [1, 2, -5, -4].findIndex(n => n < 0)
      )
    },
    // 验证fill方法
    checkArray5 () {
      console.log("['a', 'b', 'c'].fill(7)的值是：", ['a', 'b', 'c'].fill(7))
      console.log(
        "['a', 'b', 'c'].fill(7,1,3)的值是：",
        ['a', 'b', 'c'].fill(7, 1, 3)
      )
    },
    // 验证symbol
    checkSymbol () {
      console.log(
        "Symbol('foo')和Symbol('bar')返回来的结果分别是：",
        Symbol('foo'),
        Symbol('bar')
      )
    },
    // 验证set
    checkSet () {
      let s = new Set();
      [2, 3, 4, 5, 2, 5].forEach(x => s.add(x))
      console.log('s的结果是', s)
      console.log('[...new Set([2, 2, 3, 1, 4, 5])]的值是：', [
        ...new Set([2, 2, 3, 1, 4, 5])
      ])
    },
    addClass (index) {
      this.position = index
    }
  }
}
</script>
<style lang="scss">
.js-exercise {
  padding: 20px;
  display: flex;
  box-sizing: border-box;
  justify-content: flex-start;
  .el-button {
    border-radius: 0px;
  }
  .e-input .el-input__inner {
    border-radius: 0px !important;
  }
  .e-input {
    border-radius: 0px;
    width: 30%;
  }
  .activeClass {
    background-color: red;
  }
}
</style>
