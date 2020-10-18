

const authenticate = require('../../authenticate');
const User = require('../../Models/User')

const get = (req, res, next) => {
    res.statusCode = 403;
    res.end('LOGIN operation not supported yet');
}

const post = async (req, res, next) => {
    const { tokenId } = req.body;
    // console.log(req.body)
    client.verifyIdToken({ idToken: tokenId, audience: "162914266374-344ng0vh52ttcq8ma7g7hiv4dn5i4llt.apps.googleusercontent.com" })
    .then((response) => {
        const { email_verified, name, email, picture } = response.payload;
        // console.log(response.payload);
        if (email_verified) {
            User.findOne({ email: email })
            .then(async (user) => {
                if (user) {
                    // console.log(user)
                    console.log(user.firstname + " " + user.lastname + " Logged In");
                    user.picture = picture;
                    user.save();
                    var token = authenticate.getToken({_id: user._id});
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.cookie('session-id', token, { httpOnly: false });
                    res.json({success: true, token: token, user: user , status: 'You are successfully logged in!'});
                    return;
                }
                const payload = response.payload;
                const UserData = {
                    firstname: payload.given_name+" "+payload.family_name,
                    picture: payload.picture,
                    email: payload.email,
                    isEmailVerifies: true,
                }
                
                User.create(UserData)
                .then((user) => {
                    // console.log("Profile Created")
                    console.log(UserData.firstname + " " + UserData.lastname + " Signed Up");
                    // console.log(user)
                    const token = authenticate.getToken({_id: user._id});
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.cookie('session-id', token, { httpOnly: false });
                    res.json({success: true, token: token, user: user , status: 'You are successfully logged in!'});
                }, (err) => next(err))
                .catch((err) => next(err));
                
            }, (err) => next(err))
            .catch((err) => next(err));
        } else {
            res.statusCode = 400
            res.json({err: "Email Not Verified"})
        }
    });
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