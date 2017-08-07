
var bodyParser = require('body-parser')
var cors = require('cors');
var express = require('express');
var morgan = require('morgan');
var path = require('path');





var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var app = express();

var userSchema = new Schema({
  username: String,
  superheroname: String,
  image: String
});
var User = mongoose.model('User', userSchema);
mongoose.connect('mongodb://localhost/avengergram');


var db = mongoose.connection;





db.on('error', (err) => {
  console.log('=---------------------------=')
  console.log('connection error', err);
});

db.once('open', () => {
  console.log('=---------------------------=open connected.');
});






var dk = new User({
  username: 'DK',
  superheroname: 'spiderman',
  image: 'https://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b/portrait_uncanny.jpg'
})




// // Setup logger
// app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));
//
// // Serve static assets
// app.use(express.static(path.resolve(__dirname, '..', 'build')));
//
// // Always return the main index.html, so react-router render the route in the client
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
// });
//
// const PORT = process.env.PORT || 9000;
//
// app.listen(PORT, () => {
//   console.log(`App listening on port ${PORT}!`);
// });



app.use(bodyParser.json())
console.log('hiiiiiiiiii')

app.post('/', function(request, response) {
  console.log('body', request)
  var n = request.body.fullname;
console.log('=---------------------------=')
  console.log(11111111, {n})
  // response.end('success');
  response.redirect('/')
})
app.post('/site', function(request, response) {
  console.log('body', request)
  var n = request.body.fullname;
console.log('=---------------------------=')
  console.log(11111111, {n})
  // response.end('success');
  response.redirect('/')
})

app.set('port', (process.env.PORT || 9000));

app.use(express.static(process.env.PWD + '/build'));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
})


// app.post('/users', (req, res) =>{
//   // Get sent data.
//   var user = req.body;
//   console.log('joooooo')
//   res.end('Success');
// })


// store link to the pictures
// sample data to render on to page
// user can save images
// button to see all that they saved




// app.post('/users', function(req, res) {
//   // Get sent data.
//   var user = req.body;
//   // Do a MySQL query.
//   console.log('what???')
//   dk.save((err, data) => {
//     if (err) {
//       console.log('=---------------------------=')
//       console.log(err);
//     } else {
//       console.log('=---------------------------=')
//       console.log('Saved:', data);
//     }
//   })
//   res.end('Success');
// });









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
