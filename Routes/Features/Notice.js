

const authenticate = require('../../authenticate');
const NoticeBoard = require('../../Models/NoticeBoard')
const Mail = require('../../Utils/Mail')

const get = (req, res, next) => {
    NoticeBoard.find({})
    .then((docs) => {
        res.statusCode = 200;
        res.json({
            notice: docs
        })
    })
}

const post = (req, res, next) => {
    req.body.byUser = req.user._id;
    NoticeBoard.create(req.body)
    .then((doc) => {
        res.statusCode = 200;
        res.json({
            notice: doc
        });
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