const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const dotenv = require('dotenv').config();

const isDev = process.env.NODE_ENV !== 'production';
const rootDir = path.join(__dirname, '../');

const plugins = [
  new MiniCssExtractPlugin({
    filename: isDev ? '[name].css' : '[name].[contenthash].css',
    chunkFilename: isDev ? '[id].css' : '[id].[contenthash].css',
  }),
  new webpack.DefinePlugin({
    'process.env': JSON.stringify(dotenv.parsed || process.env),
  }),
  new webpack.IgnorePlugin({ resourceRegExp: /^moment$/, contextRegExp: /pikaday$/ }),
  new CopyPlugin({
    patterns: [
      { from: './src/static' },
    ],
  }),
  new HtmlWebPackPlugin({
    template: './public/index.html',
    filename: './index.html',
    hash: true,
    inject: true,
    minify: {
      removeComments: !isDev,
      collapseWhitespace: !isDev,
      removeRedundantAttributes: !isDev,
      useShortDoctype: !isDev,
      removeEmptyAttributes: !isDev,
      removeStyleLinkTypeAttributes: !isDev,
      keepClosingSlash: !isDev,
      minifyJS: !isDev,
      minifyCSS: !isDev,
      minifyURLs: !isDev,
    },
  }),
];

if (process.env.BUILD_ANALYZER === '1') plugins.push(new BundleAnalyzerPlugin({ generateStatsFile: true, statsFilename: 'stats.json' }));

module.exports = {
  context: rootDir,
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  output: {
    filename: 'app/[name].[contenthash].js',
    path: path.join(rootDir, './dist'),
    publicPath: '/',
  },
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          { loader: 'ts-loader', options: { transpileOnly: true } },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
    ],
  },
  plugins,
};
