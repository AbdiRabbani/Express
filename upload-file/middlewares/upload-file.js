require("dotenv").config();
const path = require("path")
const multer = require("multer");
const { request } = require("http");

//konfigurasi storage multer

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve(process.env.PUBLIC_DIR, process.env.UPLOAD_DIR))
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const multerInstance = multer({storage});

const uploadSingleImage = (req, res, next) => {
    const upload = multerInstance.single("image");

    upload(req, res, (err) => {
        if(err) {
            return next(err)
        }
        return next();
    })
}
const uploadMultiImage = (req, res, next) => {
    const upload = multerInstance.array("image");

    upload(req, res, (err) => {
        if(err) {
            return next(err)
        }
        return next();
    })
}

const uploadSingleImageWithData = (req, res, next) => {
    const upload = multerInstance.single("image");

    upload(req, res, (err) => {
        const {name, email} = req.body;
        console.log(name, email)
        if(err) {
            return next(err)
        }
        return next();
    })
}

module.exports = {
    uploadSingleImage,
    uploadMultiImage,
    uploadSingleImageWithData
}