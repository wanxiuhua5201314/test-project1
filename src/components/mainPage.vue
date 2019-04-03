<template>
  <div class="main-page">
    <div style="width:100%;height:5%;text-align:center;color:red;font-size:18px">企企鹅儿的coding世界</div>
     <div style="height:5%;font-weight:bold">总学习次数:<span style="color:red">{{totalTimes}}</span></div>
    <div style="height:10%;font-size:14px;font-style:oblique">今天你学习了？
         <el-button type="primary" size="mini" @click="punch">{{punchMsg}}</el-button>
         <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange" :disabled='unClick'>全选</el-checkbox>
        <el-checkbox-group style="margin-left:160px;margin-top:10px;" v-model="checkedOptions" @change="handlecheckedOptionsChange" :disabled='unClick'>
       <el-checkbox v-for="option in typeOptions" :label="option" :key="option">{{option}}</el-checkbox>
      </el-checkbox-group>
    </div>
    <div style="margin-left:100px">
      <ul >
      <li style="line-height:50px"> <router-link to="/cssExercisePage">css练习(学习次数:<span style="color:red">{{times.cssTimes}}</span>)</router-link></li>
      <li style="line-height:50px"> <router-link to="/htmlExercisePage">html练习(学习次数:<span style="color:red">{{times.htmlTimes}}</span>)</router-link> </li>
      <li style="line-height:50px"> <router-link to="/jsExercisePage">js练习(学习次数:<span style="color:red">{{times.jsTimes}}</span>)</router-link></li>
      <li style="line-height:50px"> <router-link to="/componentExercisePage">组件练习(学习次数:<span style="color:red">{{times.componentTimes}}</span>)</router-link></li>
      <li style="line-height:50px"> <router-link to="/projectPage">做项目(学习次数:(学习次数:<span style="color:red">{{times.projectTimes}}</span>)</router-link></li>
    </ul>
    </div>
  </div>
</template>
<script>
const allOptions = ['css', 'html', 'js', '组件', '项目']
export default {
  name: 'main-page',
  data () {
    return {
      unClick: true,
      checkAll: false,
      checkedOptions: [],
      typeOptions: allOptions,
      isIndeterminate: true,
      punchTime: 0,
      punchMsg: '打卡',
      times: {
        cssTimes: 0,
        htmlTimes: 0,
        jsTimes: 0,
        componentTimes: 0,
        projectTimes: 0
      }
    }
  },
  mounted () {
    this.getTimes()
  },
  watch: {
  },
  computed: {
    totalTimes: function () {
      let totalRecordTimes = this.times.cssTimes + this.times.htmlTimes + this.times.jsTimes + this.times.componentTimes + this.times.projectTimes
      var storage = window.localStorage
      if (totalRecordTimes !== 0) {
        storage.setItem('totalTimes', totalRecordTimes)
        storage.setItem('cssTimes', this.times.cssTimes)
        storage.setItem('htmlTimes', this.times.htmlTimes)
        storage.setItem('jsTimes', this.times.jsTimes)
        storage.setItem('componentTimes', this.times.componentTimes)
        storage.setItem('projectTimes', this.times.projectTimes)
      }
      return totalRecordTimes
    }
  },
  methods: {
    getTimes () {
      // console.log('打印localStorage', window.localStorage)
      // console.log('哈哈', window.localStorage.getItem('totalTimes'))
      if (!window.localStorage.getItem('totalTimes')) {
        this.$alert('这是你第一次使用该浏览器访问该网站')
      } else {
        var storage = window.localStorage
        this.totalTimes = parseInt(storage.getItem('totalTimes'))
        this.times.cssTimes = parseInt(storage.getItem('cssTimes'))
        this.times.htmlTimes = parseInt(storage.getItem('htmlTimes'))
        this.times.jsTimes = parseInt(storage.getItem('jsTimes'))
        this.times.componentTimes = parseInt(storage.getItem('componentTimes'))
        this.times.projectTimes = parseInt(storage.getItem('projectTimes'))
      }
    },
    handleCheckAllChange (val) {
      this.checkedOptions = val ? allOptions : []
      this.isIndeterminate = false
    },
    handlecheckedOptionsChange (value) {
      if (this.punchTime < 1) {
        this.$confirm('一次访问只有一次打卡机会，你确定要打卡吗', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.optionChange(value)
        })
      } else {
        this.$alert('不能再打卡，请重新刷新页面')
      }
    },
    optionChange (value) {
      for (let i = 0, j = value.length; i < j; i++) {
        if (value[i] === 'css') {
          this.times.cssTimes += 1
        } else if (value[i] === 'html') {
          this.times.htmlTimes += 1
        } else if (value[i] === 'js') {
          this.times.jsTimes += 1
        } else if (value[i] === '组件') {
          this.times.componentTimes += 1
        } else if (value[i] === '项目') {
          this.times.projectTimes += 1
        }
      }
      this.punchTime += 1
      this.checkedOptions = value
      let checkedCount = value.length
      this.checkAll = checkedCount === this.typeOptions.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.typeOptions.length
    },
    // 打卡事件
    punch () {
      if (this.unClick === true) {
        this.punchMsg = '关闭打卡'
        this.unClick = false
      } else {
        this.punchMsg = '打卡'
        this.unClick = true
      }
    }
  }
}
</script>
<style lang="scss" >
  .main-page{
    padding:10px;
    height:100%;
    width:100%;
    overflow:auto;
    box-sizing:border-box;
    background: url("../assets/main-back-pic.jpg");
    background-size:cover
  }
</style>
