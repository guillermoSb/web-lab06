const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const { merge } = require("webpack-merge");
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: "development",
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader", // Agregar estilos a un archivo
                    "css-loader", // Convertir css a js
                    "sass-loader" // Convertir sass a css
                ],
            },
            {
                test: /\.css$/i,
                use: [
                    "style-loader", // Agregar estilos a un archivo
                    "css-loader", // Convertir css a js
                ],
            },
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },

})