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
    <div  style="height:100px;width:30%">
      <el-upload
  class="upload-demo"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :before-remove="beforeRemove"
  multiple
  :on-exceed="handleExceed"
  :auto-upload="false"
  :file-list="fileList">
  <el-button size="small" type="primary">点击上传</el-button>
  <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
</el-upload>
    </div>
     <div style="display:flex;  flex-direction: row; border:1px solid black;width：500px!important">
        display:inline 在同一行，并且宽度就等于文字内容的宽度且设置宽度无用
        <p>哈哈哈</p>
        <p>嘻嘻</p>
     </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      imgUrl:
        'http://img4.imgtn.bdimg.com/it/u=2378606792,1096904360&fm=26&gp=0.jpg'
    }
  },
  methods: {
    beforeRemove (file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
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
.el-upload-list {
    margin: 0;
    padding: 0;
    margin-top: -50px;
    margin-left: 80px;
    width: 80%;
    list-style: none;
    display:flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content:center
}
.el-upload-list__item{
  overflow: hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}
.el-upload-list__item:first-child {
    margin-top: 5px;
}
.el-upload-list__item-name{
  margin-right:10px
}

</style>
