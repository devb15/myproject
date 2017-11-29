var router = require('express').Router();

// web router will mount other routers
// for all our resources
router.use('/', require('./user/UserRoutes'));
router.use('/a', require('./auth/authRoutes'));

module.exports = router;