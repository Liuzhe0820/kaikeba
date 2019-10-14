const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const User = mongoose.model('Users');
const keys = require('../config/keys');
const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.sectetOrkey;
module.exports = (passport)=>{
    passport.use(new JwtStrategy(opts, (jwt_payload, done)=> {
        User.findById(jwt_payload.id)
                    .then((user)=>{
                        if(user){
                            return done(null,user)
                        }else{
                            return done(null,false)
                        }
                    })
                    .catch((err)=>{
                        console.log(err)
                    })
    }));
}