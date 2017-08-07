
var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser')

app.use(bodyParser.json())
app.set('port', (process.env.PORT || 9000));

app.use(express.static(process.env.PWD + '/build'));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
})

//inside server.js
//use webpack-dev-server and middleware in dev environment
// if(process.env.NODE_ENV !== 'production') {
//   var webpackDevMiddleware = require('webpack-dev-middleware');
//   var webpackHotMiddleware = require('webpack-hot-middleware');
//   var webpack = require('webpack');
//   var config = require('../webpack.prod.config');
//   var compiler = webpack(config);
//
//   app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
//   app.use(webpackHotMiddleware(compiler));
// }

// var webpack = require('webpack');
// var webpackConfig = require('./webpack.config');
// var compiler = webpack(webpackConfig);
//
// app.use(require("webpack-dev-middleware")(compiler, {
//     noInfo: true, publicPath: webpackConfig.output.publicPath
// }));
//
// app.use(require("webpack-hot-middleware")(compiler));
// Add webpack-hot-middleware attached to the same compiler instance


// store link to the pictures
// sample data to render on to page
// user can save images
// button to see all that they saved



// DATABASE STUFF
// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test123');
//
// var db = mongoose.connection;
//
// db.on('error', (err) => {
//   console.log('=---------------------------=')
//   console.log('connection error', err);
// });
//
// db.once('open', () => {
//   console.log('=---------------------------=open connected.');
// });
//
//
// var Schema = mongoose.Schema
// var userSchema = new Schema({
//   name: String,
//   age: Number,
//   DOB: Date,
//   isAlive: Boolean
// });
// var User = mongoose.model('User', userSchema);
//
//
//
// var arvind = new User({
//   name: 'Arvind',
//   age: 99,
//   DOB: '01/01/1915',
//   isAlive: true
// })
//
// var spiderman = new User({
//   name: 'spiderman',
//   age: 20,
//   DOB: '01/01/2017',
//   isAlive: true
// })




// model
// find
// findOne
// findAll
// user.find()






// spiderman.save((err, data) => {
//   if (err) {
//     console.log('=---------------------------=')
//     console.log(err);
//   } else {
//     console.log('=---------------------------=')
//     console.log('Saved:', data);
//   }
// })
//
// arvind.save((err, data) => {
//   if (err) {
//     console.log('=---------------------------=')
//     console.log(err);
//   } else {
//     console.log('=---------------------------=')
//     console.log('Saved:', data);
//   }
// })















// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   res.header(
//     "Access-Control-Allow-Methods",
//     "OPTIONS, DELETE, POST, GET, UPDATE"
//   );
//   next();
// });
// app.get('/', function(request, response) {
//   // response.render('')
//   console.log('hello')
//   response.send('hello')
// })






// import { PRIV_KEY, PUBLIC_KEY } from '../config/marvel.js';



// console.log('=\/\/\/\/\/-------------MARVEL-----------------\/\/\/\/\/=')
//
// var marvelAPI = require('marvel-api');
// var keys = require('../config/marvel');
// console.log('Marvel Stuff');
// var marvel = marvelAPI.createClient({
//   publicKey: keys.publicKey,
//   privateKey: keys.privateKey
// });
//
// module.exports.findAll = function(next) {
//   marvel.characters.findAll()
//     .then(jsonObj => {
//       console.log(jsonObj.data)
//       next(jsonObj.data);
//     })
//     .fail(console.error)
//     .done();
// }
//
// console.log('=/\/\/\/\/\-------------MARVEL-----------------/\/\/\/\/\=')
