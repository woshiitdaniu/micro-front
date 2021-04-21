const { name } = require('./package');
module.exports = {
    devServer: {
        port: 10001,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
    configureWebpack: {
        output: {
            library: 'childenVue2',
            libraryTarget: 'umd' // 把微应用打包成 umd 库格式
        }
    },
};