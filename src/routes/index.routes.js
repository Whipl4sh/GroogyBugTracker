const express = require("express");
const router = express.Router();
const staticRoutes = require('./static.routes');


router
    .use('/', staticRoutes) 

module.exports = router;