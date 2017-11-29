var path = require('path');
var express = require('express');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var nunjucks = require('nunjucks');
var passport = require('passport');
var session = require('express-session');
var flash = require('connect-flash');



var mongoose = require('mongoose');
var config = require('./../config/db');



module.exports = function(app){

   

    mongoose.connect(config.url,{ useMongoClient:true },function(err){
        if(err){
          console.log(err);
          return;
        }
        console.log('Connected to Database');
      });

    // view engine setup
    nunjucks.configure('views',{
        watch:true,
        autoescape:true,
        express:app
    });
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'njk');
    
    // uncomment after placing your favicon in /public
    //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, './../public')));

    //required For Passport

    app.use(session({ secret:"mnearapp",resave:false,saveUninitialized:false }));
    app.use(flash());
    app.use(passport.initialize());
    app.use(passport.session());
    require('./../config/passport'); // pass passport for configuration
}