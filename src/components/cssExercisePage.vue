<template>
  <div class="css-exercise">
    <router-link to='/'>返回主页</router-link>
    <div style="text-align:center;color:red">css5练习</div>
    <div style="display:flex;flex-direction:row; justify-content:start">
      <div style="height:100px;width:100px;background:white;">
        <div style="height:50px;width:50px;background:green;border-radius:10px">
        </div>
      </div>
      <div style="height:100px;width:100px;background:white;">
        <div style="height:50px;width:50px;background:green;box-shadow:0px 0px 4px red ">
        </div>
      </div>
      <div class="test-animation">测试animation样式:哈哈哈</div>
    </div>
    <div class="test-transform">测试transition和transform</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      imgUrl:
        'http://img4.imgtn.bdimg.com/it/u=2378606792,1096904360&fm=26&gp=0.jpg'
    }
  }
}
</script>
<style lang="scss">
.css-exercise{
  margin:0;
  height:100%;
 .test-animation{
   position:relative;
   height:50px;
   width:200px;
    animation: mymove 5s infinite;
   // -webkit-animation:mymove 5s infinite;
  }
@keyframes mymove
{
0%   {background: red; left:0px;}
25%  {background: yellow; left:200px;}
50%  {background: blue;left:0px}
100% {background: green;left:500px}
}
.test-transform{
width:100px;
height:100px;
background:yellow;
transition:width 2s, height 5s;
}
.test-transform:hover{
  width:200px;
height:200px;
  transform:rotate(180deg);
}
// @-webkit-keyframes mymove
// {
// from {left:0px;}
// to {left:500px;}
// }

}

</style>
