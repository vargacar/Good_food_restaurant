const router = require('express').Router();

router.get('/',(req, res)=>{
 res.render('homepage')
 res.render('homepage', { isLogedIn: req.session.isLogedIn})   
})

router.get('/login',(req, res)=>{
    res.render('login')
})

router.get('/signup',(req, res)=>{
    res.render('signup')
})


module.exports = router;