

const authenticate = require('../../authenticate');
const User = require('../../Models/User')

const get = (req, res, next) => {
    res.statusCode = 403;
    res.end('GET operation not supported yet');
}

const post = (req, res, next) => {
    User.findOne({_id: req.user._id}, (err, user) => {
        if(user){
            user.changePassword(req.body.oldpassword, req.body.newpassword, (err, user) => {
                if(err){
                    res.statusCode = 403;
                    res.json({err: err})
                    return
                } else {
                    res.statusCode = 200;
                    res.json({success: "Successfully changed your password"})
                    return
                }
            });
            user.save();
        } else {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.json({err: "User Not Found"});
            return;
        }
    })
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