<template>
  <div id="app">
    <div>
      <router-view class="horizontal-div"></router-view>
      <city></city>
    </div>
    <router-view name="movie"></router-view>
  </div>
</template>

<script>
import City from './components/City'
export default {
  name: 'App',
  components: {
    City
  }
}
</script>

<style scoped>
#app {
  overflow: hidden;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#city {
  margin-left: 100px;
}
.horizontal-div {
  display: inline-block;
}
</style>
