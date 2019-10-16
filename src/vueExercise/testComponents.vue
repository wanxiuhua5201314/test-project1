<template>
  <div>
    {{checked}} <button @click="changeValue">改变值</button>
      <!-- <input  type="checkbox" v-bind:checked="checked" v-on:change="$emit('change', $event.target.checked)"> -->
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean
  },
  methods: {
    changeValue () {
      this.check = '嘻嘻嘻嘻'
      this.$emit('change', true)
    }
  }
}
</script>
