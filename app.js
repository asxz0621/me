var express = require('express');
const expressBrowserify = require('express-browserify');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var pictureRouter = require('./routes/picture');
var chatRouter = require('./routes/chat');
//中间介  解析post ，get 登返回的数据
var bodyParser = require('body-parser');
// var socket = require('socket.io');
var app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
  // automatically bundle the front-end js on the fly
  // note: this should come before the express.static since bundle.js is in the public folder
const isDev = (app.get('env') === 'development');
const browserifyier = expressBrowserify(
  './public/scripts/bundle.jsx', {
    watch: isDev,
    debug: isDev,
    extension: ['jsx'],
    transform: ['babelify'],
});
const pictureifyier = expressBrowserify('./public/scripts/picture.jsx', {
  watch: isDev,
  debug: isDev,
  extension: ['jsx'],
  transform: ['babelify'],
});
const chatrifyier = expressBrowserify('./public/scripts/chat.jsx', {
  watch: isDev,
  debug: isDev,
  extension: ['jsx'],
  transform: ['babelify'],
});
const indexifyier = expressBrowserify('./public/scripts/chat.jsx', {
  watch: isDev,
  debug: isDev,
  extension: ['jsx'],
  transform: ['babelify'],
});
if (!isDev) {
    browserifyier.browserify.transform('uglifyify', { global: true });
    pictureifyier.browserify.transform('uglifyify', { global: true });
    chatrifyier.browserify.transform('uglifyify', { global: true });
    indexifyier.browserify.transform('uglifyify', { global: true });
}
app.get('/scripts/bundle.js', browserifyier);
app.get('/scripts/picture.js', pictureifyier);
app.get('/scripts/chat.js', chatrifyier);
app.get('/scripts/index.js', indexifyier);
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static("views"));
/* 需要先定义和初始化mongoose */
const mongoose = require('./config/mongoose.js')
const db = mongoose();
app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use('/picture', pictureRouter);
app.use('/chat', chatRouter);
// app.get('/', (req, res) => res.render('index'));
module.exports = app;
