const port = 3000;
const express = require('express');
const app = express();

app.get("/error", (req, res) => {
    iniError;
});

app.use(function (err, req, res, next) {
    console.log(err);
    res.status(500).json({
        status: "fail",
        errors: err.message,
    });
});

app.use(function (err, req, res, next) {
    res.status(404).json({
        status: "fail",
        errors: "kamu salah alamat",
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));