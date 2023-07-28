const express = require('express');
const { createContact } = require('../controllers/contactControllers');
const { createApply } = require('../controllers/applyControllers');

const router= express.Router()

router.route('/').post(createApply);


module.exports = router