const express = require('express');
const router = express.Router();
const { User, Order, Item } = require('../models');



router.get('/orders', (req, res) => {
  // If the user isn't logged in, redirect them to the login page
  if (!req.session.isLogedIn) {
    return res.redirect('/login');
  }

  User.findOne({
    where: { id: req.session.userId },
    include: {
      model: Order,
      include: {
        model: Item, // Include the Item model
      },
    },
  })
    .then((userData) => {
      const orders = userData.get({ plain: true }).Orders;
      res.render('orders', { isLogedIn: req.session.isLogedIn, orders });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;


