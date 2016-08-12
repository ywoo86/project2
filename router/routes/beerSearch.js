const express = require('express');
const router = express.Router();
const db = require('../../db/db');
const https = require('https');

router.get('/:id', function(req, res){
  var searchTerm = req.params.id;
  var beerKey = 'XXXXXX';
  var options = {
    hostname: 'api.brewerydb.com',
    path: '/v2/beer?name='+searchTerm+'&key='+beerKey,
    method: "GET",
  };

  var req = https.request(options, function(res){
    console.log('statusCode: ', res.statusCode);
    console.log('headers: ', res.headers);

    res.on('data', function(data){
      process.stdout.write(data);
      sendData(data);
      // send data to client side per request
    });
  });

  function sendData(data){
    res.send(data);
  };

  req.end();

  req.on('error', function(e){
    console.log(e);
  });
});

module.exports = router;





