require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const middlewareHeader = require("./middlewares/header");


//! middleware
app.use('/',bodyParser.json(), middlewareHeader);
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})

//* middleware berfungsi untuk mengambil data dari request
//* middleware yang menggunakan app.use() berlaku untuk semua request dan method
//* middleware yang menggunakan app.get() berlaku hanya untuk request GET
//* middleware yang menggunakan app.post() berlaku hanya untuk request PORT
