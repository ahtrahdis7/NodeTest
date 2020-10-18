const express = require('express');
const passport = require('passport');

const authenticate = require('../../authenticate');
const discussion = require('./Discussion');
const notice = require('./Notice');

const FeatureRouter = express.Router();

FeatureRouter.route('/notice')
.get(notice.get)
.post(authenticate.verifyUser, notice.post)
.put(authenticate.verifyUser, notice.put)
.delete(authenticate.verifyUser, notice.delete)

FeatureRouter.route('/discussion')
.get(discussion.get)
.post(authenticate.verifyUser, discussion.post)
.put(authenticate.verifyUser, discussion.put)
.delete(authenticate.verifyUser, discussion.delete)


module.exports = FeatureRouter;



