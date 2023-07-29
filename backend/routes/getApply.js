const express = require('express');
const { getApply, deleteApply } = require('../controllers/applyControllers');

const router= express.Router()

router.route('/').get(getApply);
router.route('/:id').delete(deleteApply)



module.exports = router