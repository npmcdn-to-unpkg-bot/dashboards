module.exports = {
    entry: {venders: './src/venders', polyfills: './src/polyfills', app: './src/main'},
    output: {
        path: './src/Builds/js',
        filename: '[name].bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.ts', '.json']
    },
    module: {
        loaders: [
          {
              test: /\.ts$/,
              loader: 'ts'
          },
          {
              test: /\.json$/,
              loader: "json"
          }
        ]
    }
};
