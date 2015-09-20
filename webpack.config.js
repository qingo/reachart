var webpack = require('webpack');
var ignoreFiles = new webpack.IgnorePlugin(/\.\/d3.js$/);
module.exports = {
    entry: {
        chart: "./doc/chart.js",
        shape: "./doc/shape.js"
    },
    output: {
        path: 'doc',
        filename: "[name].dist.js"
    },
    devtool: 'source-map',
    watch: true,
    module: {
        loaders: [
            {
                test: /\.jsx?$/, loader: 'babel?stage=0'
            }, {
                test: /\.less$/, loader: "style!css!less"
            }, {
                test: /\.json$/, loader: "json"
            }, {
                test: /\.(png|jpg)$/, loader: 'url?limit=25000'
            }
        ]
    },
    plugins: [ignoreFiles]
};