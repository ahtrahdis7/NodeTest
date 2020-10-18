const express = require('express');
const passport = require('passport');

const authenticate = require('../../authenticate');

const subjects = require('./Subjects');

const SubjectRouter = express.Router();

SubjectRouter.route('/')
.get(subjects.get)
.post(authenticate.verifyUser,authenticate.verifyTeacher ,subjects.post)
.put(authenticate.verifyUser,subjects.put)
.delete(authenticate.verifyUser,subjects.delete)

// to be added
// SubjectRouter.route('/:subjectId')
// .get(teachers.get)
// .post(authenticate.verifyUser,teachers.post)
// .put(authenticate.verifyUser,teachers.put)
// .delete(authenticate.verifyUser,teachers.delete)





module.exports = SubjectRouter;



