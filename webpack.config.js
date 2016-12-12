const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.ts',
    output: {
        path: './build',
        filename: '[name].bundle.js'
    },
    module: {
        preLoaders: [{
            test: /\.ts$/,
            loader: 'tslint'
        }],
        loaders: [{
            test: /\.ts$/,
            loader: 'ts'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' })
    ],
    resolve: {
        extensions: ['', '.js', '.ts']
    },
    devtool: 'source-map',
    tslint: {
        configuration: {
            rules: {
                quotemark: [true, 'single']
            }
        },
        emitErrors: false,
        failOnHint: false,
        resourcePath: './src'
    }
};
