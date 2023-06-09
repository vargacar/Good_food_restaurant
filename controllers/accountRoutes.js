const router = require('express').Router();
const withAuth = require('../utils/auth')
const { Order, Item, OrderItem } = require('../models');

router.get('/account', withAuth, (req, res) => {
    const userId = req.session.userId
    Order.findAll({
        where: { userId },
        include: [{
            model: OrderItem,
        }]
    })
    
    .then((userOrders) => {
        const orders = userOrders.map((item) => {
            return item.get({ plain: true })
        })
        console.log(orders)
        
        res.render('account', {
            isLogedIn: req.session.isLogedIn,
            email: req.session.email,
            username: req.session.username, 
            ...orders
        })
    })
        .catch((error) => {
            console.log(error)
            res.status(500).json({ message: "Internal Error" })
        })

})


module.exports = router;