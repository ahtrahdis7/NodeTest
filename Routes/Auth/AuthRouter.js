const express = require('express');
const passport = require('passport');

const authenticate = require('../../authenticate');

const login = require('./Login')

const AuthRouter = express.Router();

AuthRouter.route('/login')
.get(login.get)
.post(login.post)
.put(login.put)
.delete(login.delete)


AuthRouter.route('/signup')
.get((req,res,next) => {
    res.statusCode = 403;
    res.end('operation not supported yet');
})
.post((req,res,next) => {
    res.statusCode = 403;
    res.end('operation not supported yet');
})
.put((req,res,next) => {
    res.statusCode = 403;
    res.end('operation not supported yet');
})
.delete((req,res,next) => {
    res.statusCode = 403;
    res.end('operation not supported yet');
})


AuthRouter.route('/sendotp')
.get((req,res,next) => {
    res.statusCode = 403;
    res.end('operation not supported yet');
})
.post((req,res,next) => {
    res.statusCode = 403;
    res.end('operation not supported yet');
})
.put((req,res,next) => {
    res.statusCode = 403;
    res.end('operation not supported yet');
})
.delete((req,res,next) => {
    res.statusCode = 403;
    res.end('operation not supported yet');
})


AuthRouter.route('/verifyotp')
.get((req,res,next) => {
    res.statusCode = 403;
    res.end('operation not supported yet');
})
.post((req,res,next) => {
    res.statusCode = 403;
    res.end('operation not supported yet');
})
.put((req,res,next) => {
    res.statusCode = 403;
    res.end('operation not supported yet');
})
.delete((req,res,next) => {
    res.statusCode = 403;
    res.end('operation not supported yet');
})


AuthRouter.route('/reset')
.get((req,res,next) => {
    res.statusCode = 403;
    res.end('operation not supported yet');
})
.post((req,res,next) => {
    res.statusCode = 403;
    res.end('operation not supported yet');
})
.put((req,res,next) => {
    res.statusCode = 403;
    res.end('operation not supported yet');
})
.delete((req,res,next) => {
    res.statusCode = 403;
    res.end('operation not supported yet');
})

AuthRouter.route('/google_auth')
.get((req,res,next) => {
    res.statusCode = 403;
    res.end('operation not supported yet');
})
.post((req,res,next) => {
    res.statusCode = 403;
    res.end('operation not supported yet');
})
.put((req,res,next) => {
    res.statusCode = 403;
    res.end('operation not supported yet');
})
.delete((req,res,next) => {
    res.statusCode = 403;
    res.end('operation not supported yet');
})

module.exports = AuthRouter;



