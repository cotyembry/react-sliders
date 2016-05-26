// var webpack = require('webpack');

// {
//     context: __dirname + "/app",
//     entry: "./app.js",
//     output: {
//         path: __dirname + "/dist",
//         filename: "bundle.js"
//     }
// }

module.exports = {
    entry: "./main.js",
    output: {
        path: __dirname,
        filename: "./dist/bundle.js"
    },
    module: {
    	loaders: [
      		{
        		test: /.jsx?$/,
        		loader: 'babel-loader',
        		exclude: /node_modules/,
        		query: {
          			presets: ['es2015', 'react']
        		}
      		}
    	]
  	},
};