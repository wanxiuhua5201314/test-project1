<template>
  <div class="js-exercise">
    <router-link to="/">返回主页</router-link>
    <router-link to="/ES6ExercisePage">Es6更多练习</router-link>
    <hr/>
    <div>
      <span style="color:red"> 锚点练习：</span>
      <div>
        <a href="#exercise1">杂乱练习</a>
        <a href="#exercise2">浏览器对象练习</a>
      </div>
    </div>
    <hr/>
    <div id="#exercise1">
      <span style="color:red"> 杂乱练习</span>
      <div>
        <el-button type="primary" @click="test">测试v-if与v-show</el-button>
        <div v-if="trueT">v-if</div>
        <div v-show="trueT">v-show</div>
        <el-button type="primary" @click="clickC($event)">测试event</el-button>
        <div ref="msgDiv">{{msg}}</div>
        <div v-if="msg1">Message got outside $nextTick: {{msg1}}</div>
        <div v-if="msg2">Message got inside $nextTick: {{msg2}}</div>
        <el-button type="primary" @click="nextTick()">测试$nextTick方法</el-button>
        <li class="list-group-item" v-for="(item,index) in menuItems" :key="item.index" @click="addClass(index)" :class="{'activeClass':position === index}">{{item}}</li>
        <el-button type="primary" @click="promise()">测试promise</el-button>
      </div>
      <hr/>
      <div id="exercise2">
        <span style="color:red"> 浏览器对象练习：</span>
        <div>
          测试setInterval与clearInterval:
          <el-input :value="realTime" style="width:50%"></el-input>
          <span @click="stop">停止时间</span>
        </div>
        浏览器的名称:{{appName}},
        屏幕的宽/高：{{screenWidth}}/{{screenHight}}
        屏幕可用宽/高: {{availWidth}}/{{availHight}}
      </div>
      <div>
      </div>
    </div>
    <div>
      ES6学习笔记：
       Babel：ES6转码器，将ES6转为ES5代码
       <el-button type="primary" @click="testLetAndVar"> 测试let和Var</el-button>
       <el-button type="primary" @click="testValue"> 变量的解构赋值</el-button>
       <el-button type="primary" @click="newMethodsOfString"> 字符串的新增方法：includes(),startsWith(),endsWith(),repeat(),trimStart(),trimEnd()</el-button>
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
      };
      for (let i = 0; i < 10; i++) {
        b[i] = function () {
          console.log('i声明为let时', i)
        }
      };
      a[6]()
      b[6]()
    },
    // 变量的解构赋值
    testValue () {
      // 数组解构赋值
      let [a, b, c] = [[], [], []]
      console.log('a,b,c的值分别是', a, b, c)
      // 对象解构赋值
      let {foo, bar} = {foo: 'aaa', bar: 'bbb'}
      console.log('foo,bar的值分别是', foo, bar)
      // 字符串的解构赋值
      let [aa, bb, cc, dd] = 'hello'
      console.log('aa,bb,cc,dd的值是', aa, bb, cc, dd)
      let {length: len} = 'hello'
      console.log('len是', len)
      // 函数参数的解构赋值
      function add ([x, y]) {
        return x + y
      };
      console.log('函数参数解构赋值', add([1, 2]))
    },
    // 字符串新增的方法
    newMethodsOfString () {
      let str = 'hello,welcome to chongqing,nice to meet you ,I am your tourist guide'
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
    addClass (index) {
      this.position = index
    },
    promise () {}
  }
}
</script>
<style lang="scss">
.js-exercise {
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
