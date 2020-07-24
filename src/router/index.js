/*
 * @Description: 希望KEEP REAL
 * @Version: 版本更新中...
 * @Autor: AKAYangYi
 * @Date: 2020-07-24 19:41:10
 * @LastEditors: YangYi
 * @LastEditTime: 2020-07-24 20:15:46
 */ 
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
//全局前置守卫 
router.beforeEach( (to,from,next) => {
  next();
})
export default router
