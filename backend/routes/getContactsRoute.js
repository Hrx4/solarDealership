const express = require('express');
const {  getContact, deleteConatct } = require('../controllers/contactControllers');

const router= express.Router()

router.route('/').get(getContact);
router.route('/:id').delete(deleteConatct)


module.exports = router