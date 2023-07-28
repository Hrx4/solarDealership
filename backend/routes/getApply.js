const express = require('express');
const { getApply } = require('../controllers/applyControllers');

const router= express.Router()

router.route('/').get(getApply);


module.exports = router