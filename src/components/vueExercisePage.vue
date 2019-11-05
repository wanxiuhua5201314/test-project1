<template>
  <div id="vue-exercise">
 <div id="particlesId"></div>
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
      .lazy修饰符:  <input v-model.lazy="msg"><br/>
      2、vue中的过渡<br/>
      <div @click="showFn" class="green">
       <transition name="red"><div v-show="show" class="red"></div></transition>
      </div>
       3、vue中的指令
      <input v-forcus>
      4、测试箭头函数-箭头函数下的this
      <el-button @click="testThis">测试this</el-button><br/>
      5、vue中的key(重要!!!!):(1)用 index 作为 key 值是有隐患的，除非你能保证 index 始终能够能够作为一个唯一的标识:
          (2) 有相同父元素的子元素必须有独特的 key。重复的 key 会造成渲染错误。
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
      },
      show: false,
      particle: [],
      particle1: []
    }
  },
  directives: {
    forcus: {
      // 指令的定义
      inserted: function (el) {
        // 聚焦元素
        el.focus()
      }
    }
  },
  methods: {
    testThis () {
      this.$axios.get('/static/particles.json').then(res => {
        this.particle = res.data
        console.log('哈哈this:', this)
        let _this = this
        _this.$axios.get('/static/particles1.json').then(res1 => {
          _this.particle1 = res1.data
          console.log('嘻嘻_this:', _this, this)
        })
      })
    },
    showFn () {
      this.show = true
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
  .green{
    width:100px;
    height:100px;
    border:1px solid
  }
 .red{
    width: 100px;
    height: 100px;
    background-color: red;
    /*下面的样式可以不写，这里为了方便理解*/
    opacity: 1;
    margin-left:0;
}
.red-enter{
    opacity: 0;
    margin-left:100%;
}
.red-enter-active{
    transition: all 1s;
}
// .red-leave{
//     /*对于简单动画来说，[name]-leave也可以不写，多数情况下，此处的样式和元素正常显示是的样式是相同的*/
//     opacity: 1;
//     margin-left:0;
// }
// .red-leave-active{
//     opacity: 0;
//     margin-left:100%;
// }
</style>
