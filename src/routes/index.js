const router = require("express").Router();

router.get('/', (req, res) => {
    res.render('index');
});


/*
router.get('/persona', (req, res) => {
    res.render('persona');
});
*/

module.exports = router;