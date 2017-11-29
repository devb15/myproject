var User = require('../user/UserModel');



exports.loginpage = function(req,res,next){

    res.send('iam login Page');
}
exports.signuppage = function(req,res,next){

    res.render('register');
}
exports.signupact = function(req,res,next){

    res.send("success");
}

exports.loginact = function(req,res,next){
    console.log(req.body);
    res.send('google');
}

exports.signup = function(req,res,next){
    
    User.create(req.body,function(err,users){
        res.send('google');
    });
    
}