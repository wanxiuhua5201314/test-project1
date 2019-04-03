<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
html,body{
margin:0px;
height:100%;
box-sizing: border-box
}
#app {
 margin:0;
 padding:0;
 width:100%;
 height:100%;
}
</style>
