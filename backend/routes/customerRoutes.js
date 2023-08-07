const express = require('express');
const { createCustomer, getCustomer, getCustomerList, updateCustomer, deleteCustomer } = require('../controllers/customerControllers');

const router= express.Router()

router.route('/create').post(createCustomer)
router.route('/:id').put(updateCustomer).delete(deleteCustomer)
router.route('/').get(getCustomerList)
router.route('/login').post(getCustomer);



module.exports = router