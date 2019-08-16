let myPlugin = {}
myPlugin.install = function (Vue, options) {
  // 1.添加全局方法或属性
  Vue.myGolbalMethod = function () {
    console.log('myGlobalMethod')
  }
  // 2.添加全局资源
  Vue.directive('my-directive', {
    bind (el, binding, vnode, oldVnode) {

    }
  })
  // 3.注入组件
  Vue.mixin({
    created: function () {
      console.log('嘿嘿嘿')
    }
  })
  // 4.添加实例方法
  Vue.prototype.$myMethod = function (methodOptions) {
    console.log('myMethod')
  }
}
export default myPlugin
