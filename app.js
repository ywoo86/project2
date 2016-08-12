const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
const bodyParser = require("body-parser");
const session = require('express-session');
const flash = require('connect-flash');
const dotenv = require('dotenv').config();
var request = require('request');

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use("/", express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session({
  secret: 'demo-secret',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));


// how we got the search term from index and call the api from server side
app.get('/search/:id',function(req,res){
  var id = req.params.id;

  var url = 'http://api.brewerydb.com/v2/beers?name='+id+'&key='+process.env.BEER;

  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body);
      res.send(JSON.parse(body));
    }
  })
});

app.use(flash());

app.listen(3000, function () {
  console.log('Auth Demo App Online!');
});

app.use(function(err, req, res, next){
  res.status(err.status || 500);
});

const router = require('./router')(app);
