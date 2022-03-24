module.exports =  (req, res, next) => {
    console.log("METHOD", req.method);
    console.log("URL", req.path);
    console.log("Headers", req.headers);

    next();
}