const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contact.controller');

router.post('/', contactController.submitContact);
router.get('/', contactController.getContacts); // For simple testing as requested

module.exports = router;
