<template>
  <div id="vue-exercise">
   <span style="color:red"> 验证vuex传值: </span>
   <div style="margin-left:10px;margin-top:10px">
     <vue-conponent-one ref="vueConponentOne">
        <div slot="sp">我是组件1的开始</div>
         <div slot="ep">我是组件1的结尾</div>
     </vue-conponent-one>
     <vue-conponent-two ref="vueConponentTwo"></vue-conponent-two>
     </div>
  </div>
</template>
<script>
import vueConponentOne from '../vueExercise/vue-conponent-one.vue'
import vueConponentTwo from '../vueExercise/vue-conponent-two.vue'
export default {
  components: {vueConponentOne, vueConponentTwo},
  data () {
    return {

    }
  }
}
</script>
<style lang="scss">
  #vue-exercise{
    height:100%;
    width:100%;
    padding:20px
  }
</style>
