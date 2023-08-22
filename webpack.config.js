const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.[contenthash].js",
        publicPath: "/",
        clean: true,
    },
    devtool: "source-map",
    devServer: {
        allowedHosts: [
            'localhost',
        ],
        historyApiFallback: true,
    },
    module: {
        rules:
            [
                {
                    test: /\.js$/,
                    exclude: /node_module/,
                    use: {
                        loader: "babel-loader",
                    },
                },
                {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader"],
                },
                {
                    test: /\.(jpe?g|png|webp)$/i,
                    use:["webp-loader","file-loader"],
                }
            ]
    },
    plugins: [
        new HtmlwebpackPlugin({
            template: "src/index.html",
        })
    ],
};