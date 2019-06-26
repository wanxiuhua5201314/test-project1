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
  <div>
    <span style="color:red">CSS基础练习:</span>
    <p> 1、测试块级元素和 <em>行内元素（强调的内容以协议来显示）</em></p>
    <p1>将块级元素的display改为inline和 <em>行内元素（将行内元素的display改为block）[展示效果]</em></p1>
    <br/>
    2、引入css样式，有3种方式：(1)使用link标记：用于引入外部样式（2）style元素：定义内部的样式、（3）@import指令：用于引入外部样式
    <br/>
    3、 link标记和@import指令不同之处在于：link标记必须放在head元素中，@import指令放在style容器中，且要放在其他css规则之前。
     <br/>
    4、<span class="test-one" id="test-two" title="哈哈">类选择器和ID选择器都是区分大小写的</span>
    <br/>
    5.可以多尝试用属性选择器，如h1[class]{color:red}:表示给所有有class属性的h1加字体颜色样式
    <br/>
    6.根据部分属性值选择，如p[class~="warning"]{color:red}:
    <span class="warning warn">class包含了waring的标签1。 </span>
    <span class="warning wa">class包含了waring的标签2。 </span>
    其中这种写法与p.warnig{}作用一样
    <br/>
    "~="这种选择器的优势在于它能用于任何属性，而不只是class
    <br/>
    <!-- <planet type="barren">planet标签</planet> -->
    7、子串匹配属性选择器：
    "class^=cloud":选择class属性值以cloud开头的所有元素
    "class$=cloud":选择class属性值以cloud结尾的所有元素
    "class*=cloud":选择class属性值包含字串‘cloud’的所有元素
    <br/>
    (1) <span class="cloud win">span[class^="cloud"]：选择以class属性值为cloud开头的所有元素</span>
    (2)<span class="win cloud">span[class^="win cloud "]：选择以class属性值为cloud开头的所有元素</span>
    8、*[lang|='en']:选择lang属性等于en或者以en-开头的所有元素
    <br/>
    9、h1>strong{color:red}:选择的只是作为一个h1元素子元素（而不是后代元素）的strong元素。
    <span><strong>span的子元素就是strong</strong></span>
    <span><em><strong>span的子元素就是em,em下是strong子元素</strong></em></span>
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
  padding:20px;
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
p1{
  display: inline;
  em{
    display: block;
  }
}
.test-oNe{
  color:red;
}
#test-two{
  color:red
}
*[title]{
  font-weight: bold;
}
planet[type="barren"]{
  color:red
}
span[class~='warning']{
  color:blue
}
span[class^="cloud"]{
  color:purple
}
span>strong{color:orange}
</style>
