<template>
  <div class="main-page">
    <div style="width:100%;height:20%;text-align:center;color:red">每天练习一点点</div>
    <div style="margin-left:100px">
      <ul >
      <li style="line-height:50px"> <router-link to="/cssExercisePage">css练习</router-link></li>
      <li style="line-height:50px"> <router-link to="/htmlExercisePage">html练习</router-link> </li>
      <li style="line-height:50px"> <router-link to="/jsExercisePage">js练习</router-link></li>
      <li style="line-height:50px"> <router-link to="/componentExercisePage">组件练习</router-link></li>
      <li style="line-height:50px"> <router-link to="/projectPage">做项目</router-link></li>
    </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'main-page',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
<style lang="scss" >
  .main-page{
   margin:0;
    padding:0;
    box-sizing:border-box
    }
</style>
