const express = require('express');
const router = express.Router();

const users = [
    {
        id : 1,
        nama : "Abdi",
        rengking : 1
    },
    {
        id : 2,
        nama : "Bardy",
        rengking : 4
    },
    {
        id : 2,
        nama : "Abbas",
        rengking : 10
    },
    {
        id : 1,
        nama : "Abdi",
        rengking : 1
    },

]


router.get("/user", (req, res, next) => {
    res.send({users})
})



module.exports = router