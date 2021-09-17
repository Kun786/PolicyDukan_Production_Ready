const express = require("express");
const router = express.Router();
const companyController = require("../app/api/controllers/companyController");
const usrController = require("../app/api/controllers/userController");

router.post('/register', companyController.create);
router.get('/getAll', companyController.getAll);

console.log("Company router Called");
module.exports = router;