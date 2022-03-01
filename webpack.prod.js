const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const { merge } = require("webpack-merge");
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: "production",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]-[hash].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,   // Extraer css en archivos
                    "css-loader", // Convertir css a js
                    "sass-loader" // Convertir sass a css
                ],
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name]-[hash].css',
        })

    ]
})