<template>
  <div id="jsExerciseMorePage2">
   1、<el-button  type="primary" @click="simpleFor">验证简版for,优化版for,forEach,for ..in ,for ..of 性能</el-button><br/>
   <!-- 2、 <el-button  type="primary" @click="betterFor">优化版for循环</el-button> -->
   2、<el-button type="primary"  @click="testForIn">验证for in</el-button> 结论：优点：既可以获取值，有可以获取值所在索引; 缺点：某些情况下会出现随机顺序的遍历;不推荐用在数组上，如果有原型属性，原型属性也会被访问<br/>
   3、<el-button type="primary"  @click="testForOf">验证for of</el-button> 结论：只能获取值;支持数组、类似数组的对象、字符串的遍历。 <br/>
   4、for Each:优点：优雅，缺点：不可以break、continue、return;只支持IE9以上。<br/>
   5、Generator函数 <el-button type="primary" @click="testGenerator">测试generator函数</el-button> <br/>
   6、iterator函数，<el-button type="primary" @click="testIterator">测试iterator</el-button> <br/>
   7、看各种数据类型的原型 <el-button type="primary" @click="showProto">查看数据类型原型</el-button> <br/>
   8.<el-button type="primary" @click="showHttp">查看http</el-button>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    // 验证简版for
    simpleFor () {
      let arr = new Array(1000000)
      arr.fill(1)
      let arr1 = []
      console.time('简版for')
      for (let i = 0; i < arr.length; i++) {
        arr1.push(arr[i])
      }
      console.timeEnd('简版for')

      console.time('优化版for')
      for (let i = 0, j = arr.length; i < j; i++) {
        arr1.push(arr[i])
      }
      console.timeEnd('优化版for', '........')
    },
    // 验证for in
    testForIn () {
      // // let arr = ['a', 'b', 'c']
      // // for (let i in arr) {
      // //   console.log(i, arr[i])
      // // }
      // Array.prototype.test = function () {}
      // var array = []
      // array[0] = 1
      // array[5] = 5
      // for (var i in array) {
      //   console.log(i, array[i])
      //   // if (array.hasOwnProperty(i) === true) {
      //   //   console.log(i, array[i])
      //   // }
      // }
    },
    // 验证 for of
    testForOf () {
      let arr1 = ['a', 'b', 'c']
      for (let [i, item] of arr1) {
        console.log(i, item)
      };
      // 对象用for...of会报错。
      // let obj1 = {name: 'www', age: 28, sex: '男'}
      // for (let i of obj1) {
      //   console.log('值分别是', i)
      // }
    },
    // 查看http相关东西
    showHttp () {
      let http = require('http')
      console.log('http是', http)
    },
    // 查看各种数据类型的原型。
    showProto () {
      console.log('第二次测试合并', 'dev分支')
      var arr1 = [1, 2, 3, 4]
      var arr2 = ''
      arr2 = arr1.find(function (value, index, arr) {
        return value > 2
      })
      console.log('arr1是', arr1)
      console.log('arr2是', arr2)
      var obj = {name: 'wxh'}
      console.log('obj是', obj)
      var mapO = new Map()
      mapO = {age: 26}
      console.log('mapO是', mapO)
      console.log('合并分支测试', 'dev分支')
    },
    // 测试iterator
    testIterator () {
      let arr = [1, 2, 3, 4]
      let iterator1 = arr[Symbol.iterator]()
      console.log(iterator1.next())
      console.log(iterator1.next())
      console.log(iterator1.next())
      console.log(iterator1.next())
    },
    // 测试generator函数
    testGenerator () {
      let it = this.genertorF(10, 5)
      console.log(it.next())
      console.log(it.next())
    },
    *genertorF (a, b) {
      yield a + b
      yield a - b
    }
  }
}
</script>
<style lang="scss">
#jsExerciseMorePage2{
    height: 100%;
    width:100%;
    padding: 20px;
  box-sizing: border-box;
}
</style>
