module.exports = {
    // ... other configurations ...
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.js$/,
          enforce: 'pre',
          use: ['source-map-loader'],
          exclude: /node_modules\/(?!timeago.js)/
        }
      ],
      ignoreWarnings: [
    {
      module: /timeago.js/,
      message: /source map/
    }
  ],
    }
  };
