const express = require('express');
const router = express.Router();
const pgp = require('pg-promise')();
const db = require('../../db/db');
// const db1 = pgp('postgres://youngwoo@localhost:5432/auth');
const db1 = pgp(process.env.DATABASE_URL);

router.get('/new', function(req, res){
  var error = req.flash('error')[0];
  res.render('sessions/new', { 'error': error });
});

router.post('/create', db.login, function(req, res){
  if(res.error) req.flash('error', res.error);
  res.redirect('/');
});

router.get('/logout', db.logout, function(req, res){
  res.redirect('/');
});

router.get('/edit', function(req, res){
  var email = req.session.user.email;
  db1.one("SELECT id, name, zipcode, email FROM users WHERE email = $1", [email])
  .then(function(userInfo){
    res.render('sessions/show', userInfo);
  })
});

  router.post('/edit/:id', function(req, res){
  var user = req.body;
  var id = req.params.id;
  db1.none("UPDATE users SET name=$1, zipcode=$2, email=$3 WHERE id=$4", [user.name, user.zipcode, user.email, id])
  .then(function(){
    req.session.user.zipcode = user.zipcode;
    // console.log(user.zipcode);
    res.redirect('/');
  });
});


module.exports = router;
