

const authenticate = require('../../authenticate');
const User = require('../../Models/User')
const Subject = require('../../Models/Subject');

const get = (req, res, next) => {
    Subject.find({})
    .then((docs) => {
        res.statusCode = 200;
        res.json({
            subjects: docs
        })
    })
}

const post = (req, res, next) => {
    Subject.create(req.body)
    .then((doc) => {
        if(doc) {
            res.statusCode = 200;
            res.json({
                subject: doc
            });
        }
    });
}

// To be added
const put = (req, res, next) => {
    res.statusCode = 403;
    res.end('LOGIN operation not supported yet');
}

// To be added
const del = (req, res, next) => {
    res.statusCode = 403;
    res.end('LOGIN operation not supported yet');
}


module.exports = {
    get : get,
    post : post,
    put : put,
    delete : del,
}