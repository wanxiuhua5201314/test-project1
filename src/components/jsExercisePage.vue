<template>
  <div class="js-exercise">
    <router-link to="/">返回主页</router-link>
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
