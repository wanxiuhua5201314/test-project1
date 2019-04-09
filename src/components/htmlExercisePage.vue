<template>
    <div class="html-exercise">
       <router-link to="/">返回主页</router-link>
    <el-container class='top-container'>
      <el-header  class="el-header"></el-header>
       <el-main  class="el-main">
         <el-input style="width:50%;margin-right:20px" placeholder="请输入内容"></el-input>
       <el-button style="margin-left:-5px" type="danger">搜索</el-button>
       </el-main>
    </el-container>
    </div>
</template>
<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style lang="scss">
  .html-exercise{
    margin:0;
    height: 100%;
    .top-container{
     height: 20%;
     border:1px solid;
   }
     .el-header{
      background-color:lightgray

    }
    .el-main{
      text-align: center
    }
  }
</style>
