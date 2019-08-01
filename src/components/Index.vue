<template>
    <div id="index">
        <Title></Title>
      <div class="login">
        <City></City>
        <LoginAndSubmit></LoginAndSubmit>
      </div>
      <Movie></Movie>
    </div>
</template>
<script>
import City from './City'
import Movie from './Movie'
import Title from './Title'
import LoginAndSubmit from './LoginAndSubmit'
export default {
  components: {
    Title,
    City,
    Movie,
    LoginAndSubmit
  }
}
</script>
<style scoped>
div {
  display: inline;
}
.login{
  float: right;
}
</style>
