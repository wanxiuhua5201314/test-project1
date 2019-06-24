<template>
    <div class="js-exercise">
    1、获取vuex里的值（通过this.$store.state.showFooter这种方式获取）
       showFooter： {{showFooterValue}}
       changableNum:{{changebleNumValue}}
    <br/>
    2、获取vuex里的值（通过getters这种方式获取）
       showFooter： {{ishow}}
       changableNum:{{getChangeNum}}
    <br/>
    3.<el-button type="primary" size="small" @click="hide">改变showFooter为false</el-button>
    <el-button type="primary" size="small" @click="newNum">改变值</el-button>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'ishow', 'getChangeNum'
    ]),
    showFooterValue () {
      return this.$store.state.showFooter
    },
    changebleNumValue () {
      return this.$store.state.changebleNum
    }
  },
  methods: {
    hide () {
      this.$store.commit('hide')
    },
    newNum () {
      this.$store.commit('newNum', 3)
    }
  }
}
</script>
