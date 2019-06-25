<template>
  <div>
    changableNum:{{changebleNumValue}}
     <el-button type="primary" size="small" @click="newNum">直接提交mutation改变值</el-button>
    <el-button type="primary" size="small" @click="byCommitChange">通过actions改变值</el-button>
  </div>
</template>
<script>
export default {
  name: 'vueConponentTwo',
  data () {
    return {

    }
  },
  computed: {
    changebleNumValue () {
      return this.$store.state.changebleNum
    }
  },
  methods: {
    newNum () {
      this.$store.commit('newNum', 2)
    },
    byCommitChange () {
      this.$store.dispatch('byCommitChange', 2)
    }
  }
}
</script>
