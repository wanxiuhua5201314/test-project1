<template>
 <div class="css-exercise-one">
    1、练习居中
    <div style="background-color:gray;height:60px;width:500px;display:flex;justify-content:space-between;align-items:center;padding:10px">
      <div style="display:flex;">
      <div style="height: 40px;line-height: 40px;width: 50px;"> <span>警员</span></div>
      <el-input v-model="inputValue"></el-input>
      </div>
      <div>
         <el-button type="primary">查询</el-button>
         <el-button type="primary" plain>重置</el-button>
      </div>
    </div>
 </div>
</template>
<script>
export default {
  data () {
    return {
      inputValue: ''
    }
  }
}
</script>
<style lang="scss">
.css-exercise-one{
   height: 100%;
    width:100%;
    padding: 20px;
  box-sizing: border-box;
}
</style>
