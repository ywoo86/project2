const express = require('express');
const router = express.Router();
const db = require('../../db/db');
const pgp = require('pg-promise')();
const db3 = pgp(process.env.DATABASE_URL);
// const db3 = pgp('postgres://youngwoo@localhost:5432/auth');
const mustache = require('mustache-express');
var request = require('request');

router.delete('/:id', function(req, res){
  var id = req.params.id;

  db3.none("DELETE FROM beers WHERE id=$1", [id]).then(function(){
    res.send({'delete': true});
  })
})

router.get('/:id', function(req, res){
  var id = req.params.id;
  var email = req.session.user.email;
  var zip = req.session.user.zipcode;
  var urlStr1 = '';
  var urlStr2 = '';

  db3.one('SELECT * FROM beers WHERE id = $1', [id])
  .then(function(beerData){
    var beer_pairing = {
      'beerInfo': beerData
    };
    // grabbed the specific beer based on the id and store info to beer_pairing

    urlStr1 = 'https://maps.googleapis.com/maps/api/geocode/json?components=postal_code:'+zip+'&key='+process.env.KEY;

    request(urlStr1, function(error, response, body){
      if (!error && response.statusCode == 200) {
        var location = {};
        var bodyparsed = JSON.parse(body);
        location.lat = bodyparsed.results[0].geometry.location.lat;
        location.lng = bodyparsed.results[0].geometry.location.lng;

        urlStr2 = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+location.lat+','+location.lng+'&radius=500&type=restaurant&name='+beerData.cuisine+'&key='+process.env.KEY;

        request(urlStr2, function(error, response, body) {
          if (!error && response.statusCode == 200) {
            // var foodInfo ={};
            var bodyparsed = JSON.parse(body);
            beer_pairing.foodInfo = bodyparsed;
            console.log('----------------UPTOHERE-------------');
            console.log(beer_pairing);
          }
        }) // end of api request to get list of restaurants

      }
    }); // end of api call to change user zipcode to longitute and latitude



    res.render('show', beer_pairing);
  }) // end of db3 getting beer
}) // end of router get request

module.exports = router;


