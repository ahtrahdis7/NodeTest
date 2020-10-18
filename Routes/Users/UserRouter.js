const express = require('express');
const passport = require('passport');

const authenticate = require('../../authenticate');

const parents = require('./Parents')
const teachers = require('./Teachers')
const students = require('./Students')

const UserRouter = express.Router();

UserRouter.route('/parents')
.get(authenticate.verifyUser,parents.get)
.post(authenticate.verifyUser,parents.post)
.put(authenticate.verifyUser,parents.put)
.delete(authenticate.verifyUser,parents.delete)

UserRouter.route('/teachers')
.get(authenticate.verifyUser,teachers.get)
.post(authenticate.verifyUser,teachers.post)
.put(authenticate.verifyUser,teachers.put)
.delete(authenticate.verifyUser,teachers.delete)

UserRouter.route('/teachers/:studentId')
.get(teachers.get)
.post(authenticate.verifyUser,teachers.post)
.put(authenticate.verifyUser,teachers.put)
.delete(authenticate.verifyUser,teachers.delete)

// UserRouter.route('/student/:studentId/')
// .get(students.get)
// .post(authenticate.verifyUser,students.post)
// .put(authenticate.verifyUser,students.put)
// .delete(authenticate.verifyUser,students.delete)

// UserRouter.route('/student/:studentId/subjects')
// .get(students.get)
// .post(authenticate.verifyUser,students.post)
// .put(authenticate.verifyUser,students.put)
// .delete(authenticate.verifyUser,students.delete)



module.exports = UserRouter;



