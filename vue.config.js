module.exports = {
    // webpack-dev-server 相关配置
    publicPath: process.env.NODE_ENV === "production" ? "./" : "./",
    devServer: {
        /* 自动打开浏览器 */
        open: false,
        host: "localhost", // 局域网和本地访问
        port: 7002,
        https: false,
        hotOnly: false,
        /* 使用代理 */
        proxy: {
            "/VideoPlatform": {
                /* 目标代理服务器地址 */
                target: "http://172.29.29.131:7002",
                /* 允许跨域 */
                changeOrigin: true,
                ws: true
                    // pathRewrite: {
                    //     "^/VideoPlatform": "/VideoPlatform"
                    // }
            }
        },
        before: () => {}
    },
    // 第三方插件配置
    // pluginOptions: {}
    lintOnSave: false
};