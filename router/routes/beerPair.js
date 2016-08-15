const express = require('express');
const router = express.Router();
const db = require('../../db/db');
const pgp = require('pg-promise')();
const db3 = pgp(process.env.DATABASE_URL);
// const db3 = pgp('postgres://youngwoo@localhost:5432/auth');
const mustache = require('mustache-express');

router.delete('/:id', function(req, res){
  var id = req.params.id;

  db3.none("DELETE FROM beers WHERE id=$1", [id]).then(function(){
    res.send({'delete': true});
  })
})

router.get('/:id', function(req, res){
  var id = req.params.id;
  var email = req.session.user.email;
  var urlStr = '';
  var location = {};

  db3.one('SELECT * FROM beers WHERE id = $1', [id])
  .then(function(beerData){

    var beer_pairing = {
      'beerInfo': beerData
    };

    console.log(email);

    // db3.one('SELECT zipcode FROM users WHERE email = $1', [email])
    // .then(function(zip){
    //   urlStr = 'https://maps.googleapis.com/maps/api/geocode/json?components=postal_code:'+zip+'&key='+process.env.KEY;
    //   console.log(urlStr);
    //   console.log('we made it this far');
    //   }) // end of api call to change user zipcode to longitute and latitude
    // }); // end of db call for zipcode

    // request(urlStr, function(error, response, body){
    //   if (!error && response.statusCode == 200) {
    //     location.lat = body.results[0].geometry.location.lat;
    //     location.lng = body.results[0].geometry.location.lng;
    //   }

    // urlStr = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+location.lat+','+location.lng+'&radius=500&type=restaurant&name='+beerData.cuisine+'&key='+process.env.KEY;

    // request(urlStr, function(error, response, body) {
    //   if (!error && response.statusCode == 200) {
    //     beer_pairing.foodInfo = body;
    //     res.render('show', beer_pairing);
    //   }
    // }) // end of api request to get list of restaurants

    res.render('show', beer_pairing);
  // }) // end of db3 getting beer
}) // end of router get request

module.exports = router;


