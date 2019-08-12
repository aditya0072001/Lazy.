var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser')
var serveStatic = require('serve-static');
const app = express();
app.use(cookieParser())
app.use('/', serveStatic(path.join(__dirname, '/dist')));
const port = process.env.PORT || 5000;
app.listen(port);