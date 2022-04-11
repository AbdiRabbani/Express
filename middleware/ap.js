const express = require('express');
var router = express.Router();
const app = express();
const port = 3000;

router.use(function (req, res, next) {
    console.log("Time", Date.now());
    next();
});

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/json', (req, res) => res.json(
    [
        "apple",
        "windows",
        "linux"
    ]
));

router.get('/middleware', (req, res, next) => {
    res.send('ini middleware');
    next();
});

app.use(router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = router;