const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const transformInferno = require('ts-transform-inferno').default;

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry: './src/app/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          getCustomTransformers: () => ({
            before: [transformInferno()],
          }),
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },

      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: './fonts/',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    alias: {
      _cc: 'classcat/dist/classcat.js',
      inferno: 'inferno/dist/index.dev.esm.js',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new CopyWebpackPlugin([{ from: './src/assets/img', to: './img' }]),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  ...(isProduction
    ? {}
    : {
        devtool: 'cheap-module-source-map',
        devServer: {
          proxy: {
            '/api': 'http://localhost:5000',
          },
          historyApiFallback: true,
        },
      }),
};
