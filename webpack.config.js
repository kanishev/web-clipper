const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, "./src"),
  mode: "development",
  entry: {
    popup: "./popup.coffee",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: path.join(__dirname, "src"),
    open: true,
    hot: true,
    port: 9000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "./popup.html"),
      filename: "popup.html",
      clean: true,
      // inject: false,
    }),
    new CopyPlugin({
      patterns: [
        { from: "manifest.json", to: path.resolve(__dirname, "dist") },
        { from: "background.js", to: path.resolve(__dirname, "dist") },
        { from: "content.js", to: path.resolve(__dirname, "dist") },
        { from: "icon.png", to: path.resolve(__dirname, "dist") },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.coffee$/,
        loader: "coffee-loader",
      },
    ],
  },
};
