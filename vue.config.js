
module.exports = {
    devServer:{
        open:true,
        port:1017,
        proxy:{
            "/apis":{
                target: 'http://localhost:1018', //对应自己的接口 模板 
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                  '^/apis': ''
                }
            }
        }
    },
    configureWebpack:{
        resolve:{
            alias:{
                //自动查找组件
                "com":"@/components", 
                //查找api  处理请求
                "api":"@/api", 
                //过滤器
                "filt":"@/filters", 
                //混入对象
                "mins":"@/minxins", 
                //页面级别组件
                "view":"@/views",
                //特殊功能封装函数
                "util":"@/utils",
                //自定义指令
                "dires":"@/directives",
            }
        }
    },
    lintOnSave: false//取消eslint代码校验
}