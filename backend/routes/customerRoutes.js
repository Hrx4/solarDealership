const express = require('express');
const { createCustomer, getCustomer } = require('../controllers/customerControllers');

const router= express.Router()

router.route('/create').post(createCustomer)
router.route('/login').post(getCustomer);



module.exports = router