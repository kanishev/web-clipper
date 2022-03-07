const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;

module.exports = {
  context: path.resolve(__dirname, "./src"),
  mode: "development",
  entry: {
    popup: "./popup.js",
    content: "/content.js",
    pinner: "/pinner.js",
    alert: "/alert.js",
    utils: "./utils.js",
    background: "/background.js",
  },
  output: {
    filename: "[name].js",
    path: isDev
      ? path.resolve(__dirname, "dist")
      : path.resolve(__dirname, "prod"),
    clean: true,
  },
  devServer: {
    static: path.join(__dirname, "src"),
    open: true,
    hot: true,
    port: 9000,
  },
  devtool: "cheap-module-source-map",
  plugins: [
    new webpack.DefinePlugin({
      MODE: JSON.stringify(process.env.NODE_ENV),
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "./popup.html"),
      filename: "popup.html",
      clean: true,
      inject: false,
    }),
    new CopyPlugin({
      patterns: [
        {
          from: isProd
            ? path.resolve(__dirname, "src/prod/manifest.json")
            : "manifest.json",
          to: isDev
            ? path.resolve(__dirname, "dist")
            : path.resolve(__dirname, "prod"),
        },
        {
          from: "images",
          to: isDev
            ? path.resolve(__dirname, "dist")
            : path.resolve(__dirname, "prod"),
        },
        {
          from: path.resolve(__dirname, "src/injected.js"),
          to: isDev
            ? path.resolve(__dirname, "dist")
            : path.resolve(__dirname, "prod"),
        },
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
