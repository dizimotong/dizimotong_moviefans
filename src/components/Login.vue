<template>
    <div class="login">
      <div class="login-div" v-show="showLogin">
        <h3>登录</h3>
        <div class="input-div">
          <input type="text" placeholder="请输入用户名/邮箱/手机号" v-model="username">
          <input type="password" placeholder="请输入密码" v-model="password">
        </div>
        <p v-show="showPrompt">{{prompt}}</p>
        <button @click="login" type="button">登录</button>
        <span @click="toRegister">没有账号？马上注册</span>
      </div>
      <div class="register-div" v-show="showRegister">
        <h3>注册</h3>
        <div class="input-div">
          <input type="text" placeholder="请输入用户名/邮箱/手机号"  v-model="newusername">
          <input type="password" placeholder="请输入密码"  v-model="newpassword">
        </div>
        <p v-show="showPrompt">{{prompt}}</p>
        <button @click="register" type="button">注册</button>
        <span @click="toLogin">已经有账号？马上登录</span>
      </div>
    </div>
</template>
<script>
import { setCookie } from '../assets/js/cookie'
export default {
  data () {
    return {
      showPrompt: true,
      showLogin: true,
      showRegister: false,
      prompt: '',
      username: '',
      password: '',
      newusername: '',
      newpassword: ''
    }
  },
  methods: {
    toLogin () {
      this.showRegister = false
      this.showLogin = true
    },
    login () {
      if (this.username === '' || this.password === '') {
        alert('请输入账号和密码')
      } else {
        var url = 'http://localhost:8085/dizimotong_moviefans/index.php/Home/user/login'
        var params = new URLSearchParams()
        params.append('username', this.username)
        params.append('password', this.password)
        this.axios.post(url, params)
          .then(res => {
            console.log(res)
            if (parseInt(res.data.code) == -1) {  // eslint-disable-line
              this.prompt = '该用户不存在'
              this.showPrompt = true
            } else if (parseInt(res.data.code) == 102) {  // eslint-disable-line
              this.prompt = res.data.msg
              console.log(this.prompt)
              this.showPrompt = true
            } else if (parseInt(res.data.code) == 0) {  // eslint-disable-line
              this.prompt = '密码输入错误'
              this.showPrompt = true
            } else if (parseInt(res.data.code) == 'admin') {  // eslint-disable-line
              // this.$router.push('/main')
            } else {
              this.prompt = '登录成功'
              this.showPrompt = true
              setCookie('username', this.username, 1000 * 60)
              setTimeout(function () {
                this.$router.push('/')
              }.bind(this), 1000)
            }
          })
          .catch(err => {
            console.error(err)
          })
      }
    },
    toRegister () {
      this.showRegister = true
      this.showLogin = false
    },
    register () {
      if(this.username == '' || this.password == ''){  // eslint-disable-line
        alert('请输入账号或密码')
      } else {
        var url = 'http://localhost:8085/dizimotong_moviefans/index.php/Home/user/register'
        var params = new URLSearchParams()
        params.append('username', this.newusername)
        params.append('password', this.newpassword)
        this.axios.post(url, params)
          .then(res => {
          if(res.data.code == 'ok') {  // eslint-disable-line
              this.prompt = '注册成功'
              this.showPrompt = true
              this.username = ''
              this.password = ''
              setTimeout(function () {
                this.showRegister = false
                this.showLogin = true
                this.showPrompt = false
              }.bind(this), 1000)
            }
            console.log(res)
          })
          .catch(err => {
            console.error(err)
          })
      }
    }
  }
}
</script>
<style>
.login-div{
  text-align: center;
}
.register-div{
  text-align: center;
}
.input-div{
  margin: 0 auto;
  width: 250px;
  height: 100px;
}
.input-div input{display:block; width:250px; height:40px; line-height:40px; margin:0 auto; margin-bottom: 10px; outline:none; border:1px solid #888; padding:10px; box-sizing:border-box;}
p{color:red;}
button{display:block; width:250px; height:40px; line-height: 40px; margin:0 auto; border:none; background-color:#41b883; color:#fff; font-size:16px; margin-bottom:5px;}
span{cursor:pointer;}
span:hover{color:#41b883;}
</style>
