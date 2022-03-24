// function cek object jika kosong


function isEmpty(object) {
    return !object || Object.keys(object).length === 0;
}

module.exports = (req, res, next) => {
    //jika object req.body kosong, maka dia akan skip middleware
    if(isEmpty(req.body)) next(route);
    //jika object req.body tidak kosong, maka dia akan mengambil data dari req.body
    console.log("BODY", req.body);

    next();
}