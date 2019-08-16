<template>
  <div id="testVueInstall">
    测试install页面,请看控制台
  </div>
</template>
<script>
import Vue from 'vue'
import MyPlugin from '../vueJs/testVueInstall'
// Vue.use  安装插件，如果插件是一个对象，必须提供install方法。如果插件是一个函数，它会被作为install方法。install方法调用后，会将Vue作为参数传入
Vue.use(MyPlugin)

export default {
  data () {
    return {

    }
  },
  mounted () {
    this.$myMethod()
    Vue.myGlobalMethod()
  }
}
</script>
<style lang="scss">
#testVueInstall{
    height: 100%;
    width:100%;
    padding: 20px;
  box-sizing: border-box;
}
</style>
