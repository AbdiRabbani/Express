const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

//route index dengan metode GET

router.get("/", (req, res, next) => {
    res.send("Goodbye, Pluto!")
})

//route index dengan metode POST
router.post(
    "/", bodyParser.json(),
    bodyParser.urlencoded({
        extended: true
    }),
    (req, res, next) => {
        res.send(req.body)
    }
)

// route index metode delete

router.delete("/:id", (req, res, next) => {
    res.send(`Data dengan id ${req.params.id} Berhasil di hapus`)
})

router.delete("/", (req, res, next) => {
    res.send('Tidak dapat menghapus, karena anda belum memasukkan id')
})

module.exports = router