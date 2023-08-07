const express = require('express');
const {  getContact, deleteConatct, updateContact } = require('../controllers/contactControllers');

const router= express.Router()

router.route('/').get(getContact);
router.route('/:id').delete(deleteConatct).put(updateContact)


module.exports = router