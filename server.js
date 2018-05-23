'use strict';

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config.babel');

new WebpackDevServer(webpack(config),{
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {colors:true}
}).listen(3000, (err) =>{
  if(err){
    return console.log(err);
  }

  console.log('listen on localhost:3000');
});
