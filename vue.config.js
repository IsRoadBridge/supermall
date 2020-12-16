module.exports = {
    configureWebpack: {
        //创建vue.config.js文件给绝对路径配置别名，方便其他文件引用
        resolve: {
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
            }
        }
    }
}
