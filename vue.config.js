const path = require('path')
function resolve (dir) {
    return path.join(__dirname, dir)
}
// vue.config.js
module.exports = {
    publicPath: './',
    outputDir: 'dist',
    assetsDir: 'static',
    lintOnSave: false,
    productionSourceMap: false, // 不产生map文件
    // 选项
    chainWebpack: (config) => {
        config.plugin('html')
            .tap(args => {
                args[0].title = '路飞自己的网站'
                return args
            })
        config.resolve.alias
            .set('@', resolve('src'))
            .set('assets', resolve('src/assets'))
            .set('views', resolve('src/views'))
            .set('components', resolve('src/components'))
            .set('common', resolve('src/common'))
    },
    // 是否在构建生产包时生成sourceMap文件,false将提高构建速度
    productionSourceMap: false

}
