const express = require('express');
const router = express.Router();
const Post = require('../models/post');
const blogController = require('../controllers/blogController');
// blog page
router.get('/', blogController.blog_index);

// create blog page /blog/create
router.get('/create', function (req, res) {
  res.render('blog/createBlog', {
    title: 'Create new Post',
    page: 'createB',
  });
});

// Single blog page route
router.get('/single/:id', (req, res) => {
  const blogId = req.params.id;

  Post.findById(blogId)
    .then((foundPost) => {
      res.render('blog/singlePage', {
        title: 'Post about ...',
        page: 'single',
        post: foundPost,
      });
    })
    // redirect if not found
    .catch((err) => res.redirect('/blog'));
});

// GET /single/edit/:id renderina singlePageEdit.ejs
router.get('/single/edit/:id', (req, res) => {
  const blogId = req.params.id;

  Post.findById(blogId)
    .then((foundPost) => {
      console.log(' foundPost', foundPost);
      res.render('blog/singlePageEdit', {
        title: 'Post about ...',
        page: 'single_edit',
        post: foundPost,
      });
    })
    // redirect if not found
    .catch((err) => res.redirect('/blog'));
});

module.exports = router;