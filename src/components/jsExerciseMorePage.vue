<template>

    <div id="jsExerciseMorePage">
       <span style="color:red"> 提示：页面进来后直接f12看控制台，有一些代码返回的结果</span>
       <br/>
       <el-button type="primary" size="small" @click="verifyPush">验证数组push、shift、unshift</el-button>
       结论：(1)let value= arr.push():arr是增加后的数组，value是增加后数组的长度
           （2）let value=arr.shift():arr是移除原数组第一项后的数组，value是原数组第一项的值
            （3）let value=arr.unshift("hh"):arr是把hh增加到数组第一项后的数组，value是增加后的长度
    <br/>
    验证websocket
    <el-button @click="send">发消息</el-button>
    <br/>
    验证async、await、promise、resolve：
    <el-button @click="verifyInterface">验证(ps:方法里有接口,记得启动node服务)</el-button> {{testInterfaceData}}
    <br/>
    <br/>
    <el-button @click="verifyPromise">更深层次的研究promise</el-button>
    验证$notify
    <el-button @click="notify">验证</el-button>
    <!-- 测试merge ,master分支添加
    哈哈哈-->
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
      arr: [],
      path: 'ws://192.168.0.200:8005/qrCodePage/ID=1/refreshTime=5',
      socket: '',
      testInterfaceData: '',
      testData: ''
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    notify () {
      this.$notify({
        title: 'Success',
        message: 'delete successfully',
        type: 'success'
      })
    },
    init () {
      if (typeof (WebSocket) === 'undefined') {
        alert('您的浏览器不支持socket')
      } else {
        // 实例化soket
        this.socket = new WebSocket(this.path)
        // 监听socket连接
        this.socket.onopen = this.open()
        // 监听socket错误消息
        this.socket.onerror = this.error()
        // 监听socket消息
        this.socket.onmessage = this.getMessge()
      }
    },
    open () {
      console.log('socket连接成功')
    },
    error () {
      console.log('连接错误')
    },
    getMessage (msg) {
      console.log(msg.data)
    },
    send () {
      this.socket.send()
    },
    close () {
      console.log('socket已经关闭')
    },
    verifyPush () {
      let alength = this.arr.push('hah', 'heiehi')
      console.log('push操作返回来的是数组的length', alength)
      console.log('shift操作', this.arr.shift())
      console.log('shift操作后', this.arr)
      console.log('unshift操作', this.arr.unshift('wwww'))
      console.log('unshift操作后', this.arr)
    },
    async  getInfo () {
      console.log('开始调用getInfo方法')
      this.testData = await new Promise((resolve, reject) => {
        this.$axios('http://localhost:8081/info').then(res => {
          console.log('接口请求成功，接口返回来的结果是 ', res)
          resolve(res.data)
        }).catch(error => {
          console.log(error)
        })
      })
      console.log(this.testData)
      this.test()
    },
    verifyInterface () {
      this.getInfo()
    },
    test () {
      this.testInterfaceData = this.testData
      console.log('执行的代码')
    },
    verifyPromise () {

    }
  },
  destroyed () {
    // 销毁监听
    this.socket.onclose = this.close()
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
