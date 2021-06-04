const express = require('express');
const router = express.Router();

const blogController = require('../controllers/blogController');
// blog page
router.get('/', blogController.blog_index);
// create blog page /blog/create
router.get('/create', blogController.blog_show_create);
// Single blog page route
router.get('/single/:id', blogController.blog_single);
// GET /single/edit/:id renderina singlePageEdit.ejs
router.get('/single/edit/:id', blogController.blog_single_edit);

module.exports = router;
