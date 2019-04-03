<template>
    <div id="component-exercise">
        <div style="text-align:center;color:red"> 图片放大镜</div>
      <div style="width:100px;height:100px;" >
     <kd-magnify :imgSrc="imgUrl"></kd-magnify>
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

    }
  }
}
</script>
<style>

</style>
