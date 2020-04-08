<template>
  <div class="css-exercise-more-page1" >
    <div class="first-div">
      <div class="dot">  </div>
      <div class="dot">  </div>
      <div class="dot">  </div>
      <div class="dot">  </div>
      <div class="dot">  </div>
    </div>
  在重合元素外层包裹一层容器，并触发该容器生成一个BFC。
    <div class="aside"> </div>
    <div class="text">
       <div class="main"></div>
    </div>
    <br/>
  1、伪类和伪元素
  <div class="second-div">测试伪类和伪元素</div>
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
.css-exercise-more-page1{
  margin:0;
  padding:20px;
  height:100%;
  //filter:grayscale(100%);//加滤镜
  .first-div{
    display:flex;
    justify-content: center;
    align-items: center;
    width:800px;
    height: 100px;
    border:1px lightgrey;
    $colors: #7ef9ff, #89cff0, #4682b4, #0f52ba, #000080;
    .dot{
      position: relative;
      border-radius: 50%;
      height: 40px;
      width:40px;
      margin:16px;
      &::before{
        position:absolute;
        content:"";
        width:100%;
        height:100%;
        background:inherit;
        border-radius: inherit;
        animation: myWave 5s ease-out infinite;
      }
      @keyframes myWave{
        50%,75%{
          transform: scale((2.5))
        }
        60%,100%{
          opacity: 0;
        }
      }
      @for $i from 1 through 5{
      &:nth-child(#{$i}){
        background:nth($colors,$i);
        &::before{
          animation-delay:$i * 0.2s;
        }
      }
    }
    }
    // div:nth-child(1){
    //   background:lightblue
    // }
    // div:nth-child(2){
    //   background:rgb(11, 89, 138)
    // }
    // div:nth-child(3){
    //  background:lightgreen
    // }
    // div:nth-child(4){
    //   background:lightpink
    // }
    // div:nth-child(5){
    //  background:mediumpurple
    // }
  }
  .second-div{
    background-color:white;
    width:200px;
    height:60px;
    text-align: center;
    line-height: 60px;
    border:1px solid;
    position: relative;
  }
  // .second-div:hover{
  //   background-color:red;
  // }
  .second-div:after{
    content: '';
    position: absolute;
    border-top:20px solid transparent;
    border-right:20px solid transparent;
    border-bottom:20px solid transparent;
    border-left:20px solid  #7f7f7f;
    right:-40px;
    top:10px

  }
  .aside{
    margin-bottom:20px;
    width:50px;
    height:50px;
    background: lightblue
  }
  .main{
    margin-top:20px;
    height:60px;
    width:60px;
    background: #4682b4
  }
  .text{
    overflow: hidden;
  }
}
</style>
