const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development', // info - or production for minify
    bail: true,
    devtool: false,
    watch: false,
    devServer: {
        contentBase: path.join(__dirname, '../dist'),
        historyApiFallback: true,
        compress: true,
        watchContentBase: false,
        disableHostCheck: true,
        open: false,
        host: '0.0.0.0'
    }
});
