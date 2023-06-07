const router = require('express').Router();
const withAuth = require('../utils/auth')


router.get('/account', withAuth, (req, res) => {
    res.render('account', { isLogedIn: req.session.isLogedIn, email: req.session.email, username: req.session.username })
})


module.exports = router;