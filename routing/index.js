require("dotenv").config();
const bodyParser = require("body-parser");
const express = require('express');
const app = express()
const routeIndex = require("./routes/index")
const userRouter = require("./routes/user")

//disini untuk routing

app.use("/", routeIndex)
app.use(bodyParser.json(),
    (req, res, next) => {
        res.header("Content-Type", "application/json");
        next()
    },
    routeIndex,
    userRouter
)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
});