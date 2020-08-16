const path = require('path')
function resolve (dir) {
    return path.join(__dirname, dir)
}
// vue.config.js
module.exports = {
    // 选项
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('assets', resolve('src/assets'))
            .set('views', resolve('src/views'))
            .set('components', resolve('src/components'))
            .set('common', resolve('src/common'))
    }
}
