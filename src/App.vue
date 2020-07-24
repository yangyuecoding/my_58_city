<template>
  <div id="app">  
    文件使用指南：
    1.启动npm start/run start
    2.路径引入：自行查看vue.config.js
    3.跨域：前端正向代理  proxy中的配置信息 自行查看
    4.api:配合axios 拦截器 进行数据交互 前期使用mock  建议使用json-server：和mock.js使用基本一致，并且使用更为简单
    5.baseUrl:模块化路径请求地址，防止后端修改接口数据：看后端 接口 的格式
    6.mixin:混入对象
    7.filters:过滤器
    8.router、vuex 分别对应 router和store文件
  </div>
</template>
<script>
export default {
  name:"App",
  data(){
    return {

    }
  },
  created(){
    this.$store.dispatch("myadd","yangyi");
  },
  mounted(){
    // 测试
    console.log(this.$store.state.name);
  }
}
</script>
<style>

</style>
