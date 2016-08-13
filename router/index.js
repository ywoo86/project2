module.exports = function(app){
  app.use('/', require('./routes/home'));
  app.use('/users', require('./routes/users'));
  app.use('/sessions', require('./routes/sessions'));
  app.use('/search/', require('./routes/beerSearch'));
  app.use('/beers/', require('./routes/beerPair'));
};
