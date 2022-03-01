const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: {
        start: '/src/app/components/start.js',
        die01: '/src/app/components/die01.js',
        die02: '/src/app/components/die02.js',
        energy01: '/src/app/components/energy01.js',
        escape01: '/src/app/components/escape01.js',
        eva01: '/src/app/components/eva01.js',
        land01: '/src/app/components/land01.js',
        land02: '/src/app/components/land02.js',
        land03: '/src/app/components/land03.js',
        obs01: '/src/app/components/obs01.js',
        obs02: '/src/app/components/obs02.js',
        phase01: '/src/app/components/phase01.js',
        phase02: '/src/app/components/phase02.js',
        vendor: '/src/app/vendor.js'
    },
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
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            chunks: ['vendor', 'start']
        }),
        new HtmlWebpackPlugin({
            filename: 'die01.html',
            chunks: ['vendor', 'die01']
        }),
        new HtmlWebpackPlugin({
            filename: 'die02.html',
            chunks: ['vendor', 'die02',]
        }),
        new HtmlWebpackPlugin({
            filename: 'energy01.html',
            chunks: ['vendor', 'energy01',]
        }),
        new HtmlWebpackPlugin({
            filename: 'escape01.html',
            chunks: ['vendor', 'escape01',]
        }),
        new HtmlWebpackPlugin({
            filename: 'eva01.html',
            chunks: ['vendor', 'eva01',]
        }),
        new HtmlWebpackPlugin({
            filename: 'land01.html',
            chunks: ['vendor', 'land01',]
        }),
        new HtmlWebpackPlugin({
            filename: 'land02.html',
            chunks: ['vendor', 'land02',]
        }),
        new HtmlWebpackPlugin({
            filename: 'land03.html',
            chunks: ['vendor', 'land03',]
        }),
        new HtmlWebpackPlugin({
            filename: 'obs01.html',
            chunks: ['vendor', 'obs01',]
        }),
        new HtmlWebpackPlugin({
            filename: 'obs02.html',
            chunks: ['vendor', 'obs02',]
        }),
        new HtmlWebpackPlugin({
            filename: 'phase01.html',
            chunks: ['vendor', 'phase01',]
        }),
        new HtmlWebpackPlugin({
            filename: 'phase02.html',
            chunks: ['vendor', 'phase02',]
        }),
        new CleanWebpackPlugin()
    ]
}