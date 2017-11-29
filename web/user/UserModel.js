var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');



var UserSchema = new Schema({
    username:{ 
        type: String,
        unique:true,
        sparse:true
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        unique:true,
        required:true
    },
    profile_url:{
        type:String
    },
    follows:[{
        type:Schema.Types.ObjectId,
        ref:'User'
    }],
    followed_by:[{
        type:Schema.Types.ObjectId,
        ref:'User'
    }],
    banned:{
        type:Boolean,
        default:false
    }

});


UserSchema.pre('save', function(next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    var salt = bcrypt.genSaltSync(8);

    // hash the password using our new salt
    var hash = bcrypt.hashSync(user.password, salt);

     // override the cleartext password with the hashed one
    user.password = hash;
    next();
});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

module.exports = mongoose.model('User',UserSchema);
