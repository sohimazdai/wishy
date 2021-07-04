const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  name: "client",
  mode: "production",
  entry: process.env.NODE_ENV === 'production' ? "./src/client/index.prod.tsx" : "./src/client/index.dev.tsx",
  output: {
    path: path.resolve(__dirname, 'dist', 'static'),
    filename: "client.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          configFile: 'tsconfig.client.json',
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'src/client/index.html', publicPath: 'static' }),
  ]
};
