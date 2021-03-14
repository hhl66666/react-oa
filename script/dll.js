const webpackConfig = require("../webpack.dll.config")
const webpack = require("webpack");

const compiler = webpack(webpackConfig)

compiler.run((err,stats) =>{
    if(err){
        console.error(err);
        return;
    }
})
