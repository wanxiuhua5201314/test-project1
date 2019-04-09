<template>
    <div class="component-exercise">
        <div style="text-align:center;color:red"> 图片放大镜</div>
      <div style="width:200px;height:200px;margin-left:50px;float:left" >
        父组件给子组件传url路径时，不能传本地图片路径：
       <kd-magnify :imgSrc='imgS'></kd-magnify>
   </div>
   <div style="width:200px;height:200px;margin-left:50px;float:left">
      动态图片绑定要加require: <img style="height:80%;" :src="imgUrl"/>
   </div>
    </div>
</template>
<script>
import kdMagnify from './componentExercise/kd-magnify.vue'
// <img src="/static/img/testMagnify.ae01753.jpg">
export default {
  components: {
    kdMagnify
  },
  data () {
    return {
      imgS: 'http://pic1.nipic.com/2008-08-14/2008814183939909_2.jpg',
      imgUrl: require('../assets/testMagnify.jpg')
    }
  }
}
</script>
<style lang="scss">
 .component-exercise{
   margin:0;
   height: 100%;
 }
</style>
