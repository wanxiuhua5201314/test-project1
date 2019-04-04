<template>
    <div id="js-exercise">
        <router-link to="/">返回主页</router-link>
        <div>   <el-button type="primary" @click="test">测试v-if与v-show</el-button>
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
    </div>
</template>
<script>
export default {
  data () {
    return {
      msg: 'A',
      trueT: false,
      msg1: '',
      msg2: '',
      msg3: '',
      menuItems: ['哈哈', '嘻嘻', '啊哦'],
      position: ''
    }
  },
  methods: {
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
    promise () {
    }
  }
}
</script>
<style lang="scss">
.js-exercise{
     .el-button{
      border-radius:0px
    }
    .e-input  .el-input__inner{
      border-radius: 0px !important;
    }
    .e-input{
      border-radius: 0px;
      width: 30%
    }
    .activeClass{
      background-color:red
    }
}
</style>
