const path = require("path")
const webpack = require("webpack")

module.exports = {
  devtool: "source-map",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  devServer: {
    contentBase: path.resolve(__dirname, "build"),
    port: "3000",
    open: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /(pdfkit|linebreak|fontkit|unicode|brotli|png-js).*\.js$/,
        use: "transform-loader?brfs",
      },
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["es2015", "stage-0", "react"],
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg)$/,
        use: "file-loader",
      },
    ],
  },
  resolve: {
    modules: ["./src", "./node_modules"],
    extensions: [".js", ".jsx"],
  },
  node: {
    fs: "empty",
    net: "empty",
    tls: "empty",
  },
}
