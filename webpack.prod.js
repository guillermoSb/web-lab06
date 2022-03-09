const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const { merge } = require("webpack-merge");
const common = require('./webpack.common');


module.exports = merge(common, {
    mode: "production",
    output: {
        path: path.resolve(__dirname, 'output_webpack'),
        filename: '[name]-[hash].bundle.js'
    },
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin(),
            new TerserPlugin()
        ]
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
            filename: 'bundle-[hash].css',
        })

    ]
})