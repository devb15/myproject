var router = require('express').Router();
var passport = require('passport');
var authController = require('./authController');
var User = require('../user/UserModel');


//Signup middleware


function signupotp(req,res,next){
    
        var user = new User();
    
        user.username = req.body.username;
    
        if(req.body.email){
            user.email = req.body.email;
        }
        
        user.phone = req.body.phone;
        user.password = req.body.password;
    
        user.save(function(err,results){
            console.log(err);
            console.log(results);
        })
    
        next();
    
    
    }


router.get('/login',authController.loginpage);
router.get('/signup',authController.signuppage);

router.post('/login',authController.loginact);
router.post('/signupact',signupotp,authController.signupact);



module.exports = router;