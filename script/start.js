const webpackConfig = require("../webpack.config")
const webpackHotMiddleware = require("webpack-hot-middleware")
const webpackDevMiddleware = require("webpack-dev-middleware")
const express = require("express")
const webpack = require("webpack");

const app = express();

const compiler = webpack(webpackConfig)

app.use(webpackDevMiddleware(compiler))
app.use(webpackHotMiddleware(compiler))

app.listen(3000)