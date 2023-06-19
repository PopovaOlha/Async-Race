const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const EslintPlugin = require('eslint-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            { test: /\.ts$/i, use: 'ts-loader' },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {},
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    plugins: [new HtmlWebpackPlugin({ template: './src/index.html' }), new EslintPlugin({ extensions: 'ts' })],
    devServer: {
        port: 4444,
        open: true,
    },
};
