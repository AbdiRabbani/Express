require("dotenv").config();
const e = require("express");
const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//middleware untuk mengatur folder pabrik

app.use(express.static(path.resolve(__dirname, process.env.PUBLIC_DIR)));

//Router untuk memberikan response error 404
app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send({
        message: err.message
    })
})

app.listen(process.env.PORT, () => {
    console.log('server berjalan di' + process.env.PORT)
})