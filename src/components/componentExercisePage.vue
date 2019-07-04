<template>
<div class="component-exercise"  >
    <div style="height:200px;width:100%">
      <div style="text-align:center;color:red"> 图片放大镜</div>
      <div style="width:200px;height:200px;margin-left:50px;float:left" >
        父组件给子组件传url路径时，不能传本地图片路径：
       <kd-magnify :imgSrc='imgS'></kd-magnify>
   </div>
   <div style="width:200px;height:200px;margin-left:50px;float:left">
      动态图片绑定要加require: <img style="height:80%;" :src="imgUrl"/>
   </div>
    </div>
     <div style="margin-top:50px;clear:both">
     <el-button type="primary" size="small" @click="getInfo"> node本地接口服务测试</el-button>
      姓名：{{personInfo.name}}
      年龄：{{personInfo.age}}
      <div title="鼠标放在此处，测试title属性，OK!">鼠标放在此处，测试title属性</div>
   </div>
</div>
</template>
<script>
import kdMagnify from './componentExercise/kd-magnify.vue'
export default {
  components: {
    kdMagnify
  },
  data () {
    return {
      imgS: 'http://pic1.nipic.com/2008-08-14/2008814183939909_2.jpg',
      imgUrl: require('../assets/testMagnify.jpg'),
      personInfo: {}
    }
  },
  methods: {
    getInfo () {
      this.$axios('http://localhost:8081/info').then(res => {
        console.log('接口返回来的结果是 ', res)
        this.personInfo = res.data
      }).catch(error => {
        console.log(error)
      })
    }
  },
  beforeDestroy () {
    this.$alert('哈哈')
  }
}
/* window.onbeforeunload = () => {
  return '嘻嘻嘻嘻'
} */
</script>
<style lang="scss">
.component-exercise {
  margin: 0;
  height: 100%;
}
</style>
