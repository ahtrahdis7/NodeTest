

const authenticate = require('../../authenticate');
const User = require('../../Models/User')
const Parent = require('../../Models/Parent')
const Student = require('../../Models/Student')

const get = (req, res, next) => {
    Parent.find({user: req.user._id})
    .populate('user')
    .populate('Student.score.subject')
    .then((parent)=> {
        if(parent[0]){
            console.log(parent[0])
            Student.findById(parent[0].student[0])
            .populate('user')
            .populate('score.subject')
            .then((student) => {
                res.statusCode = 200;
                res.json({
                    parent: parent,
                    student: student,
                })
            })
        }
    })
}

const post = (req, res, next) => {
    res.statusCode = 403;
    res.end('LOGIN operation not supported yet');
}

const put = (req, res, next) => {
    res.statusCode = 403;
    res.end('LOGIN operation not supported yet');
}

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