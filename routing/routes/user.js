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

//get user by id

router.get("/user/:id", (req, res, next) => {
    const id = req.params.id

    for(let i = 0; 1 < users.length; i++){
        let user = users[i]
        if(user.id == parseInt(id)){
            res.send(user)
            return next(router)
        }
    }

    res.send({
    error : "User not found"
    })
})



module.exports = router