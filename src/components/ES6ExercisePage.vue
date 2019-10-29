<template>
  <div class="es6-exercise">
    <span style="color:red">ps:所有的按钮操作，均需按f12，查看打印的日志效果</span>
      <br/><br/>
    1、获取vuex里的值（通过this.$store.state.showFooter这种方式获取） showFooter： {{showFooterValue}} changableNum:{{changebleNumValue}}
    <br/> 2、获取vuex里的值（通过getters这种方式获取） showFooter： {{ishow}} changableNum:{{getChangeNum}}
    <br/><br/>
    <el-button type="primary" size="small" @click="hide">改变showFooter为false</el-button>
    <el-button type="primary" size="small" @click="newNum">直接提交mutation改变值</el-button>
    <el-button type="primary" size="small" @click="byCommitChange">通过actions改变值</el-button>
    <div>
      <span style="color:red;font-size:18px">3、promise:</span>
      promise的作用是让一个异步任务执行完成之后再被执行：简单来讲，就是把原来的回调写法分离出来，在异步操作执行完后， 用链式调用的方法执行回调函数
      <br/><br/>
      <el-button type="primary" size="small" @click="getLocalSeverVlaue">获取本地服务启动的值(验证promise)</el-button>
      姓名是：{{jsonObject.name}}，年龄是：{{jsonObject.age}}
      <br/><br/>
      <el-button type="primary" size="small" @click="verifyPromise">验证promise的链式操作用法</el-button>
      <el-button type="primary" size="small" @click="verifyReject">验证promise的reject</el-button>
      <el-button type="primary" size="small" @click="verifyRejectAll">验证promise的all</el-button>all方法的效果是谁跑的慢，以谁为准执行回调
      <br/><br/>
      <el-button type="primary" size="small" @click="verifyRejectRace">验证promise的race方法</el-button>race方法是谁跑的快，就以谁为准执行回调
      <br/><br/>
        <span style="color:red;font-size:18px">4、async与await:</span>
        (1)async关键字只能放到函数前面，返回的是一个promise对象。就表示函数是一个异步函数，意味着该函数的执行不会阻塞后面代码的执行
        <el-button type="primary" size="small" @click="verifyAsync">验证async</el-button>
        <br/><br/>
        (2)await可以放任何表达式，大多数时候，放一个返回promise对象的表达式
          <el-button type="primary" size="small" @click="verifyAwait">验证await</el-button>
        <br/><br/>
        <span style="color:red;font-size:18px">5、iterator和for...of循环:</span>‘
        ES6之后，就有了四种数据集合：Array、object、map、set。。<br/>
        6、let 和 var <el-button @click="verifyLetVar">验证var和let</el-button>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { setTimeout } from 'timers'
export default {
  data () {
    return {
      jsonObject: {}
    }
  },
  computed: {
    ...mapGetters(['ishow', 'getChangeNum']),
    showFooterValue () {
      return this.$store.state.showFooter
    },
    changebleNumValue () {
      return this.$store.state.changebleNum
    }
  },
  methods: {
    // 验证let 和var
    verifyLetVar () {
      // {
      //   var i = 9
      // }
      // console.log('i是', i)
      // {
      //   let j = 10
      //   {
      //     console.log('内层的J是', j)
      //   }
      // }
    },
    hide () {
      this.$store.commit('hide')
    },
    newNum () {
      this.$store.commit('newNum', 3)
    },
    byCommitChange () {
      this.$store.dispatch('byCommitChange', 3)
    },
    // 获取本地服务的值,验证promise
    getLocalSeverVlaue () {
      // 利用promise对象的then和catch方法
      this.getValue()
        .then(data => {
          this.jsonObject = data
        })
        .catch(error => {
          console.log(error)
        })
      console.log('jsonObject的结果是：', this.jsonObject)
    },
    getValue () {
      // 返回一个promise对象
      return new Promise((resolve, reject) => {
        this.$axios('http://localhost:8081/info')
          .then(res => {
            console.log('本地Node服务接口返回来的结果是：', res)
            resolve(res.data)
          })
          .catch(error => {
            console.log(error)
          })
      })
    },
    // 验证promise的链式操作用法
    verifyPromise () {
      this.verifyPromise1()
        .then(data => {
          console.log(data)
          return this.verifyPromise2()
        })
        .then(data => {
          console.log(data)
          return this.verifyPromise3()
        })
        .then(data => {
          console.log(data)
        })
    },
    verifyPromise1 () {
      let p = new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log('执行完成1')
          resolve('随便什么数据1')
        }, 1000)
      })
      return p
    },
    verifyPromise2 () {
      let p = new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log('执行完成2')
          resolve('随便什么数据2')
        }, 2000)
      })
      return p
    },
    verifyPromise3 () {
      let p = new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log('执行完成3')
          resolve('随便什么数据3')
        }, 1500)
      })
      return p
    },
    // 验证reject
    verifyReject () {
      this.verifyReject1()
        .then(
          // resolve的回调
          data => {
            console.log('resoved...', data)
          }
          // catch方法不仅捕捉promise对象的reject内容，还能捕捉写在then里面错误代码的异常
        )
        .catch(reason => {
          console.log('rejected....', reason)
        })
    },
    verifyReject1 () {
      let p = new Promise((resolve, reject) => {
        let num = 10
        if (num <= 5) {
          resolve(num)
        } else {
          reject(new Error('数字太大了'))
        }
      })
      return p
    },
    // 验证promise的all方法,谁跑的慢，就以谁为准执行回调
    verifyRejectAll () {
      Promise.all([
        this.verifyPromise1(),
        this.verifyPromise2(),
        this.verifyPromise3()
      ]).then(results => {
        console.log(results)
      })
    },
    // 验证promise的race方法.谁跑的快，就以谁为准执行回调
    verifyRejectRace () {
      Promise.race([
        this.verifyPromise1(),
        this.verifyPromise2(),
        this.verifyPromise3()
      ]).then(results => {
        console.log(results)
      })
    },
    // 验证async函数
    verifyAsync () {
      // this.timeout()返回的是一个promise对象
      // console.log(this.timeout())
      this.timeout().then(result => {
        console.log(result)
      })
      console.log('虽然我再后面，但是我先执行')
    },
    async timeout () {
      return 'hello world'
    },
    // 验证await函数
    verifyAwait () {
      this.tesResult()
    },
    doubleAfter2seconds (num) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(2 * num)
        }, 1000)
      })
    },
    async tesResult () {
      let first = await this.doubleAfter2seconds(30)
      let second = await this.doubleAfter2seconds(50)
      let third = await this.doubleAfter2seconds(30)
      console.log(first + second + third)
    }
  }
}
</script>
<style ang="scss">
 .es6-exercise{
   padding: 20px;
   height:100%;
   width:100%
 }
</style>
