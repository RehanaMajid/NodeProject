const myOtherPostcssPlugin = require("postcss-my-plugin");

const webpackConfig = {
  name : 'client',
  target : 'web',
  devtool : config.compiler_devtool,
  resolve : {
  root : paths.client(),
  extensions : ['', '.js', '.jsx', '.json', '.coffee', '.node']
  },
  node: {
  fs: 'empty',
  net: 'empty',
  tls: 'empty'
  },
  module : {}
  }
  webpackConfig.module.loaders = [{
    test : /\.(js|jsx)$/,
    exclude : /node_modules\/(?!(lodash-es)\/).*/,
    loader : 'babel',
    query : config.compiler_babel
    }, {
    test : /\.json$/,
    loader : 'json'
    }, {
    test: /\.coffee$/,
    loader: 'coffee-loader',
    exclude: /node_modules|lib/
    }, {
    test: /\.node$/,
    loader: 'node-loader'
    }]  
module.exports = {
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js", ".css", ".scss"]
    },
  module: {
    rules: [
      {

        use: [
          // ...
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                ident: 'postcss',
                plugins: {
                   tailwindcss: {},
                   autoprefixer: {},

                },
              },
            }
          },
        ],

    






        test: /\.sss$/i,
        loader: "postcss-loader",
        options: {
          postcssOptions: {
            plugins: [
              "postcss-import",
              ["postcss-short", { prefix: "x" }],
              require.resolve("my-postcss-plugin"),
              myOtherPostcssPlugin({ myOption: true }),
              require('tailwindcss'),
              require('autoprefixer'),
              // Deprecated and will be removed in the next major release
              { "postcss-nested": { preserveEmpty: true } },
            ],
          },
        },
      },
    ],
  },
};