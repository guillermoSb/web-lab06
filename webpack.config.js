const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    mode: 'development',
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
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]-[hash].bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            chunks: ['start']
        }),
        new HtmlWebpackPlugin({
            filename: 'die01.html',
            chunks: ['die01']
        }),
        new HtmlWebpackPlugin({
            filename: 'die02.html',
            chunks: ['die02']
        }),
        new HtmlWebpackPlugin({
            filename: 'energy01.html',
            chunks: ['energy01']
        }),
        new HtmlWebpackPlugin({
            filename: 'escape01.html',
            chunks: ['escape01']
        }),
        new HtmlWebpackPlugin({
            filename: 'eva01.html',
            chunks: ['eva01']
        }),
        new HtmlWebpackPlugin({
            filename: 'land01.html',
            chunks: ['land01']
        }),
        new HtmlWebpackPlugin({
            filename: 'land02.html',
            chunks: ['land02']
        }),
        new HtmlWebpackPlugin({
            filename: 'land03.html',
            chunks: ['land03']
        }),
        new HtmlWebpackPlugin({
            filename: 'obs01.html',
            chunks: ['obs01']
        }),
        new HtmlWebpackPlugin({
            filename: 'obs02.html',
            chunks: ['obs02']
        }),
        new HtmlWebpackPlugin({
            filename: 'phase01.html',
            chunks: ['phase01']
        }),
        new HtmlWebpackPlugin({
            filename: 'phase02.html',
            chunks: ['phase02']
        }),
        new CleanWebpackPlugin()
    ]
}