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
     <br/>
      <router-link to="./testVueInstallPage"> 测试vue install</router-link>
      <br/>
      1.vue事件<br/>
      v-on:click.prevent.self 会阻止所有的点击，而 v-on:click.self.prevent 只会阻止对元素自身的点击
      <br/>
      <button @click.self.prevent="testEvent()">测试事件</button>
      按键修饰符: <input @keyup.enter="enterMethod()">
      单个复选框：<input type="checkbox" id="checkbox1" v-model="checked"> <label> {{checked}}</label>
      <br/>
      .lazy修饰符:  <input v-model.lazy="msg">
  </div>
</template>
<script>
import vueConponentOne from '../vueExercise/vue-conponent-one.vue'
import vueConponentTwo from '../vueExercise/vue-conponent-two.vue'
export default {
  components: {vueConponentOne, vueConponentTwo},
  data () {
    return {
      checked: false,
      enterMethod () {
        this.$alert('按了enter键')
      }
    }
  }
  // methods: {
  //   enterMethod () {
  //     this.$alert('按了enter键,哈哈哈')
  //   }
  // }
}
</script>
<style lang="scss">
  #vue-exercise{
    height:100%;
    width:100%;
    padding:20px
  }
</style>
