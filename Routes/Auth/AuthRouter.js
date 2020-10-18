const express = require('express');
const passport = require('passport');

const authenticate = require('../../authenticate');

const login = require('./Login')
const signup = require('./Signup')
const sendotp = require('./SendOtp')
const verify = require('./VerifyOtp')
const reset = require('./Reset')
const google_auth = require('./GoogleAuth')

const AuthRouter = express.Router();

AuthRouter.route('/login')
.get(login.get)
.post(login.post)
.put(login.put)
.delete(login.delete)

AuthRouter.route('/signup')
.get(signup.get)
.post(signup.post)
.put(signup.put)
.delete(signup.delete)

AuthRouter.route('/sendotp')
.get(sendotp.get)
.post(sendotp.post)
.put(sendotp.put)
.delete(sendotp.delete)

AuthRouter.route('/verifyotp')
.get(verify.get)
.post(verify.post)
.put(verify.put)
.delete(verify.delete)

AuthRouter.route('/reset')
.get(reset.get)
.post(authenticate.verifyUser, reset.post)
.put(reset.put)
.delete(reset.delete)

AuthRouter.route('/google_auth')
.get(google_auth.get)
.post(google_auth.post)
.put(google_auth.put)
.delete(google_auth.delete)


module.exports = AuthRouter;



