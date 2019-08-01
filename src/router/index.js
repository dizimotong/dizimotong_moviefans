import Vue from 'vue'// 引入Vue
import VueRouter from 'vue-router'// 引入vue-router
// import VueResource from 'vue-resource'
// import Title from '@/components/Title'// 引入根目录下的Title.vue组件
import axios from 'axios'
import VueAxios from 'vue-axios'
import Login from '../components/Login'
import Index from '../components/index'

Vue.use(VueRouter) // Vue全局使用Router
Vue.use(VueAxios, axios)

export default new VueRouter({
  mode: 'history',
  routes: [ // 配置路由，这里是个数组
    { // 每一个链接都是一个对象
      path: '/', // 链接路径
      name: 'Index', // 路由名称，
      component: Index // 对应的组件模板
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
