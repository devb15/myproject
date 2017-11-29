
var User = require('./UserModel');



exports.home = function(req,res,next){
    
    res.render('index',{ title:"user Route" });

}

exports.create = function(req,res,next){

    var user = new User();

    user.email = req.body.email;
    user.password = req.body.password;
    user.profile_url = "http://google.com";

    user.save(function(err,results){
        if(err) return res.send(err);
        console.log('success saving data');
        res.send(results);
    });
}

exports.login = function(req,res,next){

   // var user = new User();

    console.log(req.body);

    User.findOne({ email:req.body.email },function(error,user){

        console.log(user);
        user.comparePassword(req.body.password, function(err, isMatch) {
            if (err) throw err;
            console.log(req.body.password+':', isMatch); // -> Password123: true
    
            res.send(isMatch);
        });

    });



    
}