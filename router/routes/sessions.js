const express = require('express');
const router = express.Router();
const db = require('../../db/db');

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

// router.put('/edit', function(req, res){
//   console.log('actually in the edit router section');
//   var user = req.body;
//   console.log(user);
//   res.render('/show');
//   // db.none("UPDATE users SET name=$1, email=$2, password=$3 WHERE id=$4",
//   //   [user.name, user.email, user.password, user.id]).then(function(){
//   //     console.log('update done');
//   //     console.log(user);
//   //     res.json(user);
//   //     res.end();
//   //   })
// })

module.exports = router;
