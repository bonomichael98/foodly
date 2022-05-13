const router = require('express').Router();

//const userRoutes = require('./api/user-routes');
const homeRoutes = require('./home-routes.js');

//router.use('/', user-routes);
router.use('/', homeRoutes);

module.exports = router;
