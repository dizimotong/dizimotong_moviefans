<template>
    <div>
        <select v-model="city"  @change="changeCity">
            <option value="" disabled>请选择城市</option>
            <option>广州</option>
            <option>深圳</option>
            <option>北京</option>
            <option>上海</option>
        </select>
    </div>
</template>
<script>
import Bus from '../bus'
export default {
  name: 'City',
  data () {
    return {
      city: ''
    }
  },
  mounted () {
    this.$nextTick(function () {
    })
  },
  methods: {
    changeCity: function () {
      Bus.$emit('city', this.city)
    }
  }
}
</script>
<style>

</style>
