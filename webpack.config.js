const path = require("path");

module.exports = {
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(svg|png|jpg|jpeg|gif)$/i,
                type: "asset/resource"
            },
            {
                test: /\.svg/i,
                loader: "svg-inline-loader"
            }
        ]
    },
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
    devtool: "inline-source-map",
    devServer: {
        static: "./dist"
    },
}

