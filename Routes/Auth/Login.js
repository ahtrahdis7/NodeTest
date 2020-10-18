
const passport = require('passport')
const authenticate = require('../../authenticate');
const User = require('../../Models/User')

const get = (req, res, next) => {
    res.statusCode = 403;
    res.end('GET operation not supported yet');
}

const post = (req, res, next) => {
    passport.authenticate('local', async (err, user, info) => {
        if(user){
            if(user.isEmailVerified == true){
                var token = authenticate.getToken({_id: user._id});
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.cookie('session-id', token, { httpOnly: false });
                user.salt = "NaN"
                user.hash = "NaN"
                res.json({success: true, token: token, user: user , status: 'You are successfully logged in!'});
            } else {
                res.statusCode = 405;
                res.setHeader('Content-Type', 'application/json');
                res.json({err: "Email Verification Status: False"});
                return;
            }
        } else {
            User.findOne({email : req.body.email}, (err, user) => {
                if(user){
                    err = { message : "Incorrect Password" }
                    res.statusCode = 405;
                    res.setHeader('Content-Type', 'application/json');
                    res.json({err: err});
                    return;
                } else {
                    res.statusCode = 500;
                    res.setHeader('Content-Type', 'application/json');
                    res.json({err: "User Not Found"});
                    return;
                }
            });
        }
    })(req, res, next);
}

const put = (req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported yet');
}

const del = (req, res, next) => {
    res.statusCode = 403;
    res.end('DELETE operation not supported yet');
}


module.exports = {
    get : get,
    post : post,
    put : put,
    delete : del,
}