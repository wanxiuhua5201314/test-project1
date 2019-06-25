<template>
  <div>
    <slot name="sp"></slot>
    changableNum:{{changebleNumValue}}
     <el-button type="primary" size="small" @click="newNum1">直接提交mutation改变值</el-button>
    <el-button type="primary" size="small" @click="byCommitChange1">通过actions改变值</el-button>
     <slot name="ep"></slot>
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
const {mapState, mapMutations, mapActions} = createNamespacedHelpers('vueStore1')
export default {
  name: 'vueConponentOne',
  data () {
    return {

    }
  },
  computed: {
    ...mapState({
      changebleNumValue: state => state.changebleNum
    })
  },
  methods: {
    ...mapMutations(['newNum']),
    ...mapActions(['byCommitChange']),
    newNum1 () {
      this.newNum(3)
    },
    byCommitChange1 () {
      this.byCommitChange(3)
    }
  }
}
</script>
