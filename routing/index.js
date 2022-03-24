require("dotenv").config();
const express = require('express');
const app = express()
const routeIndex = require("./routes/index")
const userRouter = require("./routes/user")

//disini untuk routing

app.use("/", routeIndex)
app.use("/", userRouter)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
});