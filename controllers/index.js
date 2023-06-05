const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const accountRoutes = require('./accountRoutes');
const orderRoutes = require('./ordersRoutes'); // Import the orderRoutes
const apiRoutes = require('./api');

router.use(homeRoutes);
router.use(accountRoutes);
router.use(orderRoutes); // Add the orderRoutes
router.use('/api', apiRoutes);

router.use((req, res, next) => {
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
});

module.exports = router;


