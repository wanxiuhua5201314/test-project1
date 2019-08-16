<template>
  <div id="testVueInstall">
    测试install页面
  </div>
</template>
<script>
import Vue from 'vue'
import MyPlugin from '../vueJs/testVueInstall'
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
