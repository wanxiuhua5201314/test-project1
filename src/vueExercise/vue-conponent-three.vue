<template>
  <div>
<el-button @click="clickTime"> you have clicked me {{clickTimes}} times</el-button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      clickTimes: 0
    }
  },
  methods: {
    clickTime () {
      this.clickTimes += 1
    }
  }
}
</script>
