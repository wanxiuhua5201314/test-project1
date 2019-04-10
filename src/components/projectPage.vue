<template>
    <div class="project-page">
        <section class='page-a'>
         <div class="chs-boy chs-boy-deer"></div>
        <div class="moon"></div>
        <div class="cloudy"></div>
        <div class="tree"></div>
        </section>
    </div>
</template>

<script >
export default {
  data () {
    return {}
  },
  mounted () {
  },
  methods: {
  }
}
</script>
<style lang="scss">
.project-page {
  width: 100%;
  height: 100%;
  position: relative;
   .page-a {
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  background-image: url('../assets/images/a/page-a-bg.png');
  //background-image: url(http://img.mukewang.com/565d07770001790814410901.png);
  position: absolute;
  z-index: 5;
  .chs-boy {
  width: 5rem;
  height: 5rem;
  position: absolute;
  z-index: 3;
  top: 1rem;
  right: 1rem;
  transform: scale(2);
  background: url(../assets/images/a/boy-sleigh-car.png) -300% -100%;
  background-size: 400% 100%
}

.chs-boy-deer {
  animation: chsBoyDeer 1s steps(3, end) infinite;
}
@keyframes chsBoyDeer {
  0% {
    background-position: 0 100%
  }

  100% {
    background-position: -300% 100%
  }
}
  .boy-sleigh-car{
      width:100px;
      height:100px;
  }
  .moon{
    position: absolute;
    left: 260px;
    top: 50px;
    width: 100px;
    height: 100px;
    background-color:yellow;
    border-radius: 50%;
    box-shadow: 0px 0px 20px;
    animation: nucleus 2s infinite linear;
  }
@keyframes nucleus {
  0%,
  100% {
    box-shadow: 0 0 0 transparent
  }
  50% {
    box-shadow: 0 0 1rem #FCF0BC
  }
}
.cloudy {
 left:100px;
 top:100px;
 position: absolute;
 width: 50px;
 height: 50px;
 border-radius: 50%;
 background-color: #60768D;
 box-shadow: #60768D 65px -15px 0 -5px,#60768D 25px -25px, #60768D 30px 10px,#60768D 60px 15px 0 -10px,#60768D 85px 5px 0 -5px;
animation: cloudy 5s linear infinite;
}

@keyframes cloudy {
  0% {
   top:100px
  }
  100%{
  top:90px
  }
}
.tree {
  height: 20rem;
  width:20rem;
  bottom: 80px;
  left: 2rem;
  position:absolute;
  background-image: url(../assets/images/a/trees.png);
  background-size: 200% 100%;
  animation: treeAnim 1s steps(2) infinite;
}

@keyframes treeAnim {
  0% {
    background-position: 200% 100%
  }
  100% {
    background-position: 400% 100%
  }
}
}

}
</style>
