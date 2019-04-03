<template>
    <div id="css-exercise">
      <router-link to='/'>返回主页</router-link>
         <div style="text-align:center;color:red">css5练习</div>
       <div  style="display:-webkit-flex;flex-direction:row; justify-content:start">
      <div style="height:100px;width:100px;background:white;">
      <div style="height:50px;width:50px;background:green;border-radius:10px">
      </div>
    </div>
     <div style="height:100px;width:100px;background:white;">
      <div style="height:50px;width:50px;background:green;box-shadow:0px 0px 4px red ">
      </div>
    </div>
    </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      imgUrl: 'http://img4.imgtn.bdimg.com/it/u=2378606792,1096904360&fm=26&gp=0.jpg'
    }
  }
}
</script>
<style>

</style>
