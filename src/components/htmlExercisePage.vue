<template>
    <div class="html-exercise">
       <router-link to="/">返回主页</router-link>
       <br/>
    <!-- <el-container class='top-container'>
      <el-header  class="el-header"></el-header>
       <el-main  class="el-main">
         <el-input style="width:50%;margin-right:20px" placeholder="请输入内容"></el-input>
       <el-button style="margin-left:-5px" type="danger">搜索</el-button>
       </el-main>
    </el-container> -->
      <!-- <button @click="playPause()">播放/暂停</button>
      <button @click="makeBig()">大</button>
      <button @click="makeNormal()">中</button>
      <button @click="makeSmall()">小</button> -->
      <!-- <video id="video1" src="http://video.699pic.com/videos/04/54/34/a_NdVdi6RRDJXw1547045435_10s.mp4" ></video> -->
      <!-- <button @click="setCanvas">画画布</button> -->
      <!-- <canvas id="myCanvas" width="200" height="100"></canvas>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="190">
           <polygon points="100,10 40,180 190,60 10,60 160,180"
                  style="fill:lime;stroke:purple;stroke-width:5;fill-rule:evenodd;" />
     </svg> -->
     <!-- <p id="demo"></p> -->
     <!-- <button @click="getPosition">获取定位</button> -->  ^[1-9]\d*$
     1、input type属性的值：<br/>
     输入框type为email时： <input type="email"/>
     输入框type为url时：<input type="url"/>
     输入框type为number时：<input min="1" max="9" pattern="[1-9]" type="number">
     输入框type为range时：<input type="range">
     输入框type为Date pickers时：<input type="date">
     输入框type为search时：<input type="search">
     输入框type为color时：<input type="color"/>
     表单元素的datalist属性：
     <input type="url" list="url_list" name="link"/>
     <datalist id="url_list">
<option label="W3Schoole" value="http://www.w3school.com.cnDASFADLSKFADSFALADSLAFSFDASFKADSLFJLDJSKAL"/>
<option label="Google" value="http://www.google.com" />
<option label="Microsoft" value="http://www.microsoft.com" />
    </datalist>
    <br/>
    <!-- 1、svg画图
    <img src="./componentExercise/rect1.svg" alt=""/> -->
    2、html基础练习
     <p contenteditable="true"> 这是一段可以编辑的段落</p>
     <p  id="drag1" draggable="true" @dragstart="drag($event)" style="width:50%;" >
        这一段内容可以移动。请把该段落拖入到下面的矩形
     </p>
     <div id="div1" @drop="drop($event)" @dragover="allowDrop($event)"></div>
      <br/>
      <button @click="alert('哈哈哈')">测试</button>
    </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    // 拖动
    drag (ev) {
      ev.dataTransfer.setData('Text', ev.target.id)
    },
    // 放下
    drop (ev) {
      var data = ev.dataTransfer.getData('Text')
      ev.target.appendChild(document.getElementById(data))
      ev.preventDefault()
    },
    allowDrop (ev) {
      ev.preventDefault()
    },
    // 获取定位
    getPosition () {
      let x = document.getElementById('demo')
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition)
      } else {
        x.innerHTML = 'Geolocation is not supported by this browser'
      }
    },
    showPosition (position) {
      let x = document.getElementById('demo')
      x.innerHTML = 'Latitude' + position.coords.latitude + '<br/>Longtitude:' + position.coords.longtitude
    },
    setCanvas () {
      var c = document.getElementById('myCanvas')
      var cxt = c.getContext('2d')
      cxt.fillStyle = '#FF0000'
      cxt.fillRect(0, 0, 150, 75)
    },
    playPause () {
      var myVideo = document.getElementById('video1')
      if (myVideo.paused) {
        myVideo.play()
      } else {
        myVideo.pause()
      }
    }
  }
}
</script>
<style lang="scss">
  .html-exercise{
   padding:10px;
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
  #div1 {width:50%;padding:10px;border:1px solid #aaaaaa;}
</style>
