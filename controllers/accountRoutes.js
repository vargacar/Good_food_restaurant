const router = require('express').Router();

router.get('/account',(req, res)=>{
 res.render('account', { isLogedIn: req.session.isLogedIn})   
})


module.exports = router;