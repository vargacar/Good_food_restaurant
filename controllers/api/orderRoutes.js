const router = require('express').Router();
const { Order,Item, OrderItem } = require('../../models');
const withAuth = require('../../utils/auth');


router.post('/', withAuth, (req, res)=>{
    const userId = req.session.userId
    const{items, totalPrice}= req.body

    Order.create({userId, totalPrice}). then((savedOrder)=>{
        return savedOrder
    }).then((savedOrder)=>{
        const itemsData = items.map((item)=>{
           item.orderId = savedOrder.id
           return item
        });
        return OrderItem.bulkCreate(itemsData)
    }).then((savedItems)=>{
        res.status(201).json({message: 'Order Created Succesfully!'})
    })
    .catch((error)=>{
        console.log(error)
    })
})



router.get('/', (req, res) => {
 const userId = req.session.userId
    Order.findAll({ 
        where: { userId },
        include: [{
            model: OrderItem,
            include : {
                model: Item, 
                attributes: ['name', 'price', 'category', 'imageurl']
            }
        }]
     }).then((userOrders) => {
        res.json(userOrders)
    })
        .catch((error) => {
            console.log(error)
            res.status(500).json({ message: "Internal Error" })
        })
})

module.exports = router;