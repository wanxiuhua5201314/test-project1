<template>
  <div class="hello">
    <el-container class='top-container'>
      <el-header  class="el-header"></el-header>
       <el-main  class="el-main">
         <el-input class="e-input" placeholder="请输入内容"></el-input>
       <el-button style="margin-left:-5px" type="danger">搜索</el-button>
       </el-main>
    </el-container>
    <el-button type="primary" @click="test">测试v-if与v-show</el-button>
    <div v-if="trueT">v-if</div>
    <div v-show="trueT">v-show</div>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      trueT: false
    }
  },
  methods: {
    test () {
      if (this.trueT === false) {
        this.trueT = true
      } else {
        this.trueT = false
      }
    }
  }
}
</script>
<style lang="scss" >
.hello{
  margin:0;
  padding:0;
  .top-container{
     height: 100%;
     border:1px solid;
   }
    .el-header{
      background-color:lightgray

    }
    .el-main{
      text-align: center
    }
    .el-button{
      border-radius:0px
    }
    .e-input  .el-input__inner{
      border-radius: 0px !important;
    }
    .e-input{
      border-radius: 0px;
      width: 30%
    }
    }
</style>
