const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/app.js",
  },
  output: {
    filename: "shop-snippet.js",
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        cache: true,
      }),
      new OptimizeCSSAssetsPlugin({
        assetNameRegExp: /\.optimize\.css$/g,
        cssProcessor: require("cssnano"),
        cssProcessorPluginOptions: {
          preset: ["default", { discardComments: { removeAll: true } }],
        },
        canPrint: true,
      }),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/shop-snippet.css",
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.exec\.js$/,
        use: ["script-loader"],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
  },
};
