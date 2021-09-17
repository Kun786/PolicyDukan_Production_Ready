const express = require('express');
const router = express.Router();
const adminController = require("../app/api/controllers/adminAuthController");
router.post('/register',adminController.create);
// router.post('/sendMessage', contactController.create);
console.log("Router is Called");
module.exports = router;