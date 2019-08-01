<template>
    <div>
        <router-link to="/login" v-show="!login">登录</router-link>
        <router-link to="/login" v-show="!login">注册</router-link>
        <h3 v-show="login">欢迎{{userName}}</h3>
        <a v-show="login" href="#" @click="quit">注销登录</a>
    </div>
</template>
<script>
import { getCookie, delCookie } from '../assets/js/cookie'
export default {
  data () {
    return {
      login: false,
      userName: ''
    }
  },
  mounted () {
    /* 页面挂载获取保存的Cookie值，渲染到页面上 */
    let name = getCookie('username')
    this.userName = name
    if(name == '') {  // eslint-disable-line
      this.login = false
    } else {
      this.login = true
    }
    console.log(name)
  },
  methods: {
    quit () {
      /* 删除Cookie */
      delCookie('username')
    }
  }
}
</script>
<style scoped>

</style>
