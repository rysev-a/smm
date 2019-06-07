module.exports = {
  resolve: {
    extensions: ['.ts', '.js'],
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
    ],
  },
};
