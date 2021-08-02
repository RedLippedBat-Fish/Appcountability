const path = require("path");

module.exports = {
  mode: process.env.NODE_ENV,
  entry: "./client/index.js",
  output: {
    path: path.join(__dirname, "/build"),
    filename: "bundle.js",
  },
  devServer: {
    publicPath: "/build/",
    compress: true,
    port: 8080,
    proxy: {
      // "/api/**": { target: "http://localhost:3000/" },
      "/api/**": { target: "http://[::1]:3000/" }
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },

      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  target: 'node',
  externals: {
    fsevents: "require('fsevents')"
  }
};
