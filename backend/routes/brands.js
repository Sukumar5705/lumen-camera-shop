const express = require('express');
const router = express.Router();
const brandsController = require('../controllers/brands.controller');

router.get('/', brandsController.getBrands);
router.get('/:slug', brandsController.getBrandBySlug);

module.exports = router;
