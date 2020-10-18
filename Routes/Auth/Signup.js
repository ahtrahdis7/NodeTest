
const passport = require('passport');
const generator = require('generate-password');
const shortid = require('shortid');

const authenticate = require('../../authenticate');
const User = require('../../Models/User')
const Otp = require('../../Models/Otp')
const Student = require('../../Models/Student')
const Parent = require('../../Models/Parent')
const Teacher = require('../../Models/Teacher')

const Mail = require('../../Utils/Mail');

const get = (req, res, next) => {
    res.statusCode = 403;
    res.end('GET operation not supported yet');
}

const post = (req, res, next) => {
    console.log(req.body)
    User.findOne({email: req.body.email}, (err, user) => {
        if(user){
            if(!user.isEmailVerified){
                Otp.findOne({email: user.email})
                .then((doc) => {
                    doc.otp = Math.ceil(Math.random() * (98765 - 12345) + 12345);
                    doc.save();
                    Mail.SendOtp(doc.email, doc.otp);
                });

                res.statusCode = 409;
                res.json({
                    status: "unsuccessful", 
                    err: "Email Already Registered but un-verified",
                    message: "OTP has been sent to your email, Please verify your email"
                });
            } else {
                res.statusCode = 409;
                res.json({
                    status: "unsuccessful", 
                    err: " Email Already Registered and Verified, Try Logging In !! "
                });
            }
        } else {
            req.body.isEmailVerified = true;
            User.register(new User(req.body), req.body.password, (err, user) => {
                if(err){
                    res.statusCode = 500;
                    res.setHeader('Content-Type', 'application/json');
                    res.json({err: err});
                } else {
                    user.save((err, user) => {
                        if(err){
                            res.statusCode = 500;
                            res.setHeader('Content-Type', 'application/json');
                            res.json({err: err});
                        } else  {
                            console.log("User Created ")
                            passport.authenticate('local')(req,res, () => {
                                res.statusCode = 200;
                                res.setHeader('Content-Type', 'application/json');
                                user.hash = "";
                                user.salt = "";
                                res.json({
                                    success: true, 
                                    status: 'Registration Successful',
                                    user: user,
                                });
                            });
                            var OTP = Math.ceil(Math.random() * (98765 - 12345) + 12345);
                            Otp.create({
                                email: user.email,
                                otp: OTP,
                            }).then((doc) => {
                                Mail.SendOtp(doc.email, doc.otp);
                            });

                            if(req.body.isStudent){
                                req.body.roll_no = shortid.generate();
                                req.body.user = user._id
                                Student.create(req.body)
                                .then((doc) => {
                                    const parent = {
                                        email: req.body.parentEmail,
                                        pass : generator.generate({length: 8, uppercase: false, numbers: true}),
                                        isParent: true,
                                        isEmailVerified : true,
                                    }
                                    User.register(new User(parent), parent.pass, (err, user) => {
                                        console.log("Parent User Account created")
    
                                        Mail.sendPassword(parent);
                                        Parent.create({
                                            email: parent.email,
                                            user: user._id,
                                            student: doc._id,
                                        });
                                        console.log("Parent Account created")
                                    });
                                })
                                
                            } else {
                                Teacher.create({user: user._id});
                                console.log("Teacher Account Created")
                            }
                            //  if student
                                // CREATE STUDENTS ACCOUNT HERE
                                // CREATE PARENTS ACCOUNT RIGHT HERE
                            // else 
                                // CREATE TEACHERS ACCOUNT RIGHT HERE
                        }
                    });
                }
            });
        }
    });
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