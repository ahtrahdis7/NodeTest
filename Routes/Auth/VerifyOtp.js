

const authenticate = require('../../authenticate');
const Otp = require('../../Models/Otp');
const User = require('../../Models/User')
const Mail = require('../../Utils/Mail')

const get = (req, res, next) => {
    res.statusCode = 403;
    res.end('GET operation not supported yet');
}

const post = (req, res, next) => {
    Otp.findOne({email: req.body.email})
    .then((doc) => {
        // console.log(doc)
        if(doc.otp === parseInt(req.body.otp)){
            User.findByUsername(req.body.email)
            .then((user) => {
                user.isEmailVerified = true;
                user.save();
                Mail.sendOtpSuccess(user.email);
                res.statusCode = 200;
                console.log
                res.json({
                    success: true,
                    message: "Otp Successfully Verified"
                });
            });
        } else {
            res.statusCode = 400;
            res.json({
                success: false,
                message: "Invalid Otp"
            });
        }
    });
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