const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const accountRoutes = require('./accountRoutes');
const apiRoutes = require('./api');


router.use (homeRoutes);
router.use (accountRoutes);
router.use ('/api', apiRoutes) ;

module.exports = router;