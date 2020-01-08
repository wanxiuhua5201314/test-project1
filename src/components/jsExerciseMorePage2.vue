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
   8.<el-button type="primary" @click="showHttp">查看http</el-button><br/>
   9.异步遍历器：<el-button type="primary" @click="testAsyncIterator">测试异步遍历器</el-button><br/>
   10.遍历器的应用：(1)解构赋值。(2)扩展运算符。<el-button type="primary" @click="iteratorApply">遍历器应用</el-button><br/>
   11.filter方法。<el-button type="primary" @click="testFilter">测试filter</el-button>
   12.避免v-if 和 v-for 的方法:使用computed属性
   <div v-for="item in haveAuthData "  :key="item.name">
     {{item.name}}
   </div><br/>
   13.<el-button type="primary" @click="testVue">测试vue</el-button>
   14.弹框拖拽<br/>
   <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button><br/>
   <el-dialog
   v-dialogDrag
  :close-on-click-modal="clickBoolean"
  title="提示"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">
  <span>这是一段信息</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
   15.弹框拖拽
<div v-divDrag class="div-drag" ></div>
  16.push赋值问题:push方法返回的是数组的长度。
  <el-button type="primary" @click="testPush">push赋值测试</el-button>
  </div>
</template>
<script>
import Vue from 'vue'
export default {
  data () {
    return {
      clickBoolean: false,
      dialogVisible: false,
      strTemplate: '哈哈哈哈',
      authData: [
        {
          name: 'ww',
          auth: true
        }, {
          name: 'ss',
          auth: false
        }, {
          name: 'tt',
          auth: true
        }]
    }
  },
  computed: {
    haveAuthData: function () {
      return this.authData.filter(function (user) {
        return user.auth === true
      })
    }
  },
  methods: {
    //
    testPush () {
      let ss = []
      let ss1 = ss.push('kk', 'yy', 'tt')
      let ss2 = ss
      console.log('ss1,ss2是', ss1, ss2)
    },
    mouseDownHandleelse (event) {
      this.moveDataelse.x = event.pageX - this.$refs.kongtiao.offsetLeft
      this.moveDataelse.y = event.pageY - this.$refs.kongtiao.offsetTop
      event.currentTarget.style.cursor = 'move'
      window.onmousemove = this.mouseMoveHandleelse
    },
    mouseMoveHandleelse (event) {
      let moveLeft = event.pageX - this.moveDataelse.x + 'px'
      let moveTop = event.pageY - this.moveDataelse.y + 'px'
      this.$refs.kongtiao.style.left = moveLeft
      this.$refs.kongtiao.style.top = moveTop
    },
    mouseUpHandleelse (event) {
      window.onmousemove = null
      event.currentTarget.style.cursor = 'move'
      console.log('鼠标松开了')
    },
    // 测试vue
    testVue () {
      let ss = new Vue()
      console.log(ss)
    },
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
    // 测试filter
    testFilter () {
      let tt = this.authData.filter(function (user) {
        return user.auth === true
      })
      console.log('tt是', tt)
    },
    // 遍历器的应用
    iteratorApply () {
      // 解构
      let sss = new Set().add('a').add('b').add('c')
      let [x, y] = sss
      console.log(x, y)
      let [first, ...resst] = sss
      console.log(first, resst)
      let obj = {a: 1, b: 2, c: 4, d: 6}
      let {a, b, c, e} = obj
      console.log(a, b, c, e)
      // 扩展运算符
      let arr1 = [1, 2, 3]
      let arr2 = ['a', [...arr1], 'b']
      let arr3 = ['a', ...arr1, 'b']
      console.log('arr2是:', arr2, 'arr3是：', arr3)
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
      let obj = {
        age: '12',
        sex: '男',
        job: 'developer'
      }
      for (let i in obj) {
        console.log(i, obj[i])
      };
      let arr1 = ['a', 'b', 'c', 'd']
      for (let j in arr1) {
        console.log(j, arr1[j])
      }
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
      mapO.set('sex', 'girl')
      console.log('mapO是', mapO)
      var str1 = new String('abcde')
      var str2 = '12345'
      console.log('str1是', str1, str2)
      let ss = new Set()
      ss.add(1)
      ss.add(1)
      console.log('ss是', ss)
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
    // 测试异步遍历器
    testAsyncIterator () {
      let it = this.idMarker()
      console.log('it是', it)
      console.log('是否是promisez对象', it.next().value)
      it.next().value.then(o => {
        console.log(o, o.valM)
      })
    },
    idMarker () {
      let index = 0
      return {
        next: function () {
          return {
            value: new Promise(function (resolve, reject) {
              setTimeout(() => {
                resolve({valM: index++, done: false})
              }, 1000)
            })
          }
        }
      }
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
.div-drag{
   height: 200px;
    width: 400px;
    border:1px solid;
    cursor: pointer;
}
</style>
