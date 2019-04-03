<template>
  <div class="hello">
    <el-container class='top-container'>
      <el-header  class="el-header"></el-header>
       <el-main  class="el-main">
         <el-input class="e-input" placeholder="请输入内容"></el-input>
       <el-button style="margin-left:-5px" type="danger">搜索</el-button>
       </el-main>
    </el-container>
    <el-button type="primary" @click="test">测试v-if与v-show</el-button>
    <div v-if="trueT">v-if</div>
    <div v-show="trueT">v-show</div>
   <el-button type="primary" @click="clickC($event)">测试event</el-button>
   <div ref="msgDiv">{{msg}}</div>
  <div v-if="msg1">Message got outside $nextTick: {{msg1}}</div>
  <div v-if="msg2">Message got inside $nextTick: {{msg2}}</div>
   <el-button type="primary" @click="nextTick()">测试$nextTick方法</el-button>
   <li class="list-group-item"  v-for="(item,index) in menuItems" :key="item.index" @click="addClass(index)" :class="{'activehhhhh':position === index}">{{item}}</li>
  <el-button type="primary" @click="promise()">测试promise</el-button>
  <hr/>
  <div style="text-align:center;color:red">css5练习</div>
  <div  style="display:-webkit-flex;flex-direction:row; justify-content:start">
    <div style="height:100px;width:100px;background:white;">
      <div style="height:50px;width:50px;background:green;border-radius:10px">
      </div>
    </div>
     <div style="height:100px;width:100px;background:white;">
      <div style="height:50px;width:50px;background:green;box-shadow:0px 0px 4px red ">
      </div>
    </div>
      <div style="text-align:center;color:red"> 做图片放大镜</div>
      <div style="width:100px;height:100px;" >
     <kd-magnify :imgSrc="imgUrl"></kd-magnify>
   </div>
  </div>
    <hr/>
  </div>
</template>
<script>
import kdMagnify from './kd-magnify.vue'
export default {
  name: 'HelloWorld',
  components: {
    kdMagnify
  },
  data () {
    return {
      msg: 'A',
      trueT: false,
      msg1: '',
      msg2: '',
      msg3: '',
      menuItems: ['哈哈', '嘻嘻', '啊哦'],
      position: '',
      // imgUrl: '../assets/testMagnify.jpg'
      imgUrl: 'http://img4.imgtn.bdimg.com/it/u=2378606792,1096904360&fm=26&gp=0.jpg'
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
<style lang="scss" >
.hello{
  margin:0;
  padding:0;
  .top-container{
     height: 100%;
     border:1px solid;
   }
    .el-header{
      background-color:lightgray

    }
    .el-main{
      text-align: center
    }
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
    .activehhhhh{
      background-color:red
    }
    }
</style>
