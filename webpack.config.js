const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/Swiper.html',
    mode: 'production',
    module: {
        rules: [
            { test: /\.html$/i, use: 'html-loader' },
            { test: /\.(png|jpe?g|gif)$/i, use: 'file-loader' }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
      },
    plugins: [
        new HtmlWebpackPlugin(
            {template:'./src/Swiper.html',}
        )
      ]
}