const path = require('path');

const config = {
  mode: 'development',
  target: 'web',
  entry: './src/color-harmonizer.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'color-harmonizer.js',
    path: path.resolve(__dirname, './dist'),
    library: 'ColorHarmonizer',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
};

module.exports = config;
