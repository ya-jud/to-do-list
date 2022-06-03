import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { VueLoaderPlugin } from 'vue-loader';

const mode = 'development';
if(process.env.NODE_ENV === 'production') {
  mode = 'production';
};

const plugins = [
  new HtmlWebpackPlugin({
    template: './public/index.html'
  }),
  new MiniCssExtractPlugin(),
  new VueLoaderPlugin(),
  new webpack.DefinePlugin({
    __VUE_OPTIONS_API__: true,
    __VUE_PROD_DEVTOOLS__: false,
  }),
];

const module = {
  rules: [
    { test: /\.(vue)$/, use: ['vue-loader'] },
    { test: /\.(css)$/, use: ['vue-style-loader', 'css-loader'] },
    { test: /\.m?js/, resolve: { fullySpecified: false } },
  ],
};

const output = {
  path: path.resolve(process.cwd(), 'dist'),
};

const resolve = {
  extensions: ['.js', '.vue'],
  modules: [path.join(process.cwd(), 'src'), 'node_modules'],
};

const devServer = {
  hot: true,
  open: process.platform === 'darwin',
  host: '0.0.0.0',
  port: 8080,
  https: true
};

const config = {
  entry: ['./src/index.js'],
  plugins,
  module,
  output,
  resolve,
  devtool: 'source-map',
  devServer, 
};

export default config;