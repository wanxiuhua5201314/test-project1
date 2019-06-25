<template>
  <div class="js-exercise">
    验证vuex传值
     <vue-conponent-one ref="vueConponentOne">
        <div slot="sp">我是组件1的开始</div>
         <div slot="ep">我是组件1的结尾</div>
     </vue-conponent-one>
     <vue-conponent-two ref="vueConponentTwo"></vue-conponent-two>
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
