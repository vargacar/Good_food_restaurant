const router = require('express').Router();
const { Item } = require('../models');

router.get('/',(req, res)=>{
 res.render('homepage', { isLogedIn: req.session.isLogedIn})   
})

router.get('/login',(req, res)=>{
    res.render('login')
})

router.get('/signup',(req, res)=>{
    res.render('signup')
})

router.get('/menu',(req, res)=>{
    const allCategories = ['Lunch', 'Breakfast', 'Dinner', 'Desserts', 'Drinks', 'Sides']
    const category = req.query.category || allCategories
    Item.findAll({
        where: {
            category
        },
        attributes: [
            'id', 'category', 'name', 'price', 'imageurl'
        ]
    }).then((itemsData)=>{
        const items = itemsData.map((item)=>{
            return item.get({plain: true})
        })
        res.render('menu', {items})
    })
    .catch(()=>{
        res.render('menu', {items: [], message: 'Error getting Menu Items, try again later.'})
    })
})

module.exports = router;