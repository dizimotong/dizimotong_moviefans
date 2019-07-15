import Vue from 'vue'// 引入Vue
import Router from 'vue-router'// 引入vue-router
import Title from '@/components/Title'// 引入根目录下的Title.vue组件
import Movie from '@/components/Movie'
import City from '@/components/City'
import axios from 'axios'
import Vueaxios from 'vue-axios'

Vue.use(Router) // Vue全局使用Router
Vue.use(Vueaxios, axios)

export default new Router({
  routes: [ // 配置路由，这里是个数组
    { // 每一个链接都是一个对象
      path: '/', // 链接路径
      name: 'Title', // 路由名称，
      components: { // 对应的组件模板
        default: Title
      }
    }
  ]
})
