const express = require('express');
const router = express.Router();


router.get('/persona', (req, res) => {
    res.render('nueva-persona');
});

router.post('/newperson', (req, res) => {
    console.log(req.body);
    res.send('OK');
});

module.exports = router;