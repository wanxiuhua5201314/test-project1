<template>
  <div>
    <slot name="sp"></slot>
    changableNum:{{changebleNumValue}}
     <el-button type="primary" size="small" @click="newNum">直接提交mutation改变值</el-button>
    <el-button type="primary" size="small" @click="byCommitChange">通过actions改变值</el-button>
     <slot name="ep"></slot>
  </div>
</template>
<script>
export default {
  name: 'vueConponentOne',
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
      this.$store.commit('newNum', 3)
    },
    byCommitChange () {
      this.$store.dispatch('byCommitChange', 3)
    }
  }
}
</script>
