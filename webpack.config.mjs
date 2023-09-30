/*!*******************************!*\
  !** strikeshark webpack basic **!
  \*******************************/

import { path, MiniCssExtractPlugin } from './libs/_packageProviders.mjs'

export default {
  // mode: 'development', // Set to 'production' for production build
  entry: './src/_imports.main.mjs',
  output: {
    filename: 'strikeshark-bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.(c|sc|sa)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'strikeshark-main.css'
    })

  ]
}



