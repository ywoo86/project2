const express = require('express');
const router = express.Router();
const db = require('../../db/db');
const pgp = require('pg-promise')();
const db3 = pgp(process.env.DATABASE_URL);
const mustache = require('mustache-express');

router.delete('/:id', function(req, res){
  var id = req.params.id;

  db3.none("DELETE FROM beers WHERE id=$1", [id]).then(function(){
    res.send({'delete': true});
  })
})




router.get('/:id', function(req, res){
  var id = req.params.id;
  console.log('beer = ', id);

  db3.one('SELECT * FROM beers WHERE id = $1', [id])
  .then(function(beerData){

    var beer_pairing = {
      'beerInfo': beerData
    };
    console.log(beer_pairing);

    var url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=40.739885,-73.990082&radius=500&type=restaurant&name='+beerData.cuisine+'&key='+process.env.KEY;

    // request(url, function(error, response, body) {
    //   if (!error && response.statusCode == 200) {
    //     console.log(body);
    //     beer_pairing.foodInfo = body;
    //     res.render('show', beer_pairing);
    //   }

    }) // end of request

    res.render('show', beer_pairing);
  }) // end of db3 getting beer
}) // end of router get request

module.exports = router;

      // var beer_info = {
      //   'foodInfo': body,
      //   'beerInfo': beerData
      // };
// how we got the search term from index and call the api from server side
// app.get('/search/:id',function(req,res){
//   var id = req.params.id;

//   var url = 'http://api.brewerydb.com/v2/beers?name='+id+'&key='+process.env.KEY;

//   request(url, function (error, response, body) {
//     if (!error && response.statusCode == 200) {
//       console.log(body);
//       res.send(JSON.parse(body));
//     }
//   })
// });


