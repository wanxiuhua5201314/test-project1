<template>
    <div id="jsExerciseMorePage">
       <span style="color:red"> 提示：页面进来后直接f12看控制台，有一些代码返回的结果</span>
       <br/>
       <el-button type="primary" size="small" @click="verifyPush">验证数组push、shift、unshift</el-button>
       结论：(1)let value= arr.push():arr是增加后的数组，value是增加后数组的长度
           （2）let value=arr.shift():arr是移除原数组第一项后的数组，value是原数组第一项的值
            （3）let value=arr.unshift("hh"):arr是把hh增加到数组第一项后的数组，value是增加后的长度
    </div>
</template>
<script>
var person1 = {
  toLocaleString: function () {
    return 'nick'
  },
  toString: function () {
    return 'nn'
  }
}
var person2 = {
  toLocaleString: function () {
    return 'greg'
  },
  toString: function () {
    return 'gr'
  }
}
var people = [person1, person2]
console.log('默认调用对象的toString方法：', people)
console.log('调用对象的toString方法：', people.toString())
console.log('调用对象的toLocaleString方法：', people.toLocaleString())
export default {
  data () {
    return {
      arr: []
    }
  },
  methods: {
    verifyPush () {
      let alength = this.arr.push('hah', 'heiehi')
      console.log('push操作返回来的是数组的length', alength)
      console.log('shift操作', this.arr.shift())
      console.log('shift操作后', this.arr)
      console.log('unshift操作', this.arr.unshift('wwww'))
      console.log('unshift操作后', this.arr)
    }
  }
}
</script>
<style lang="scss">
#jsExerciseMorePage{
    height: 100%;
    width:100%;
    padding: 20px;
  box-sizing: border-box;
}
</style>
