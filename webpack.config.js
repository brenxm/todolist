const path = require("path");
const sass = require("sass");

module.exports = {
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource"
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

