var debug = process.env.NODE_ENV !== "production";
var webpack = require("webpack");
var path = require('path');

module.exports = {
    context: path.resolve(__dirname + "/src"),
    devtool: debug ? "inline-sourcemap" : null,
    entry: {client: "./js/client.js"},
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
                }
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'js'),
        filename: "./js/[name].min.js"
    },
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ]
}