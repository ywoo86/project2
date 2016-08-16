const express = require('express');
const router = express.Router();
const db = require('../../db/db');
const pgp = require('pg-promise')();
const db2 = pgp(process.env.DATABASE_URL);

router.get('/:id', function(req, res){
  var id = req.params.id;

  db2.any('SELECT * FROM beers WHERE category = $1 LIMIT 10', [id])
  .then(function(beerData){
    res.send(beerData);
  })

});

module.exports = router;





