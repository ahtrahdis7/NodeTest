const get = (req, res, next) => {
    res.statusCode = 403;
    res.end('LOGIN operation not supported yet');
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