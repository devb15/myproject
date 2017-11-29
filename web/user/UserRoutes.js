var router = require('express').Router();
var user = require('./UserController');
var passport = require('passport');




router.get('/',user.home);

  // process the signup form

  //console.log(passport.authenticate('local-signup'));
 router.post('/create',user.create);

 router.post('/login',user.login);


module.exports = router;