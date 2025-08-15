const express = require('express');
const router = express.Router();
const versionRoutes = require('./version');

router.use('/version', versionRoutes);

module.exports = router;
