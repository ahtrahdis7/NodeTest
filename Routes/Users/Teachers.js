

const authenticate = require('../../authenticate');
const User = require('../../Models/User')
const Student = require('../../Models/Student')
const Teacher = require('../../Models/Teacher')


const get = async (req, res, next) => {
    const Data = {}
    await Teacher.find({user: req.user._id})
    .populate('user')
    .populate('subjects')
    .then((docs) => {
        Data.teacher = docs;
    })
    await Student.find({})
    .populate('user')
    .populate('score.subject')
    .then((students) => {
        Data.student = students;
    })

    res.statusCode = 200;
    res.json({data: Data});

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