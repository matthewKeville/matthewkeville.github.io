const path = require('path');

module.exports = {

  entry: './src/js/index.js',

  cache: true,

  mode: "development",

  output: {
    path: __dirname,
    filename: 'bundle.js'
  },


  module: {
    rules: [

      {
        test: /\.(css|ts|jsx|js)$/i,
        exclude: /(node_modules)/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"]
          }
        }]
      },

      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-mantine",
                    {
                      // Options
                    },
                    "postcss-simple-vars",
                    {
                      'mantine-breakpoint-xs': '36em',
                      'mantine-breakpoint-sm': '48em',
                      'mantine-breakpoint-md': '62em',
                      'mantine-breakpoint-lg': '75em',
                      'mantine-breakpoint-xl': '88em',
                    }
                  ],
                ],
              },
            },
          }
        ],
      },
    ]
  }
};
