var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
var cookieParser = require('cookie-parser')
const app = express();
app.use(cookieParser());

app.use('/', serveStatic(path.join(__filename, 'public/index.html')));
//app.use('/', serveStatic(path.join(__dirname, '/dist')));
const port = process.env.PORT || 5000;


app.listen(port);