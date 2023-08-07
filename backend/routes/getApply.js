const express = require('express');
const { getApply, deleteApply, updateApply } = require('../controllers/applyControllers');

const router= express.Router()

router.route('/').get(getApply);
router.route('/:id').delete(deleteApply).put(updateApply)



module.exports = router