const express = require('express');
const router = express.Router();
const Post = require('../models/post');

// home page
router.get('/', function (req, res) {
  // paimti index.ejs faila is views direktorijos
  res.render('index', {
    title: 'Home',
    page: 'home',
  });
});

// about page
router.get('/about', function (req, res) {
  res.render('about', {
    title: 'About us',
    page: 'about',
  });
});

// blog page
router.get('/blog', function (req, res) {
  // parsisiusti duomenis is db
  Post.find()
    .then((posts) => {
      res.render('blog/blog', {
        title: 'Our blog',
        page: 'blog',
        posts,
      });
    })
    .catch((err) => console.error(err.message));
});

// contact page
router.get('/contact', function (req, res) {
  res.render('contact', {
    title: 'Contact us',
    page: 'contact',
  });
});

// create blog page /blog/create
// contact page
router.get('/blog/create', function (req, res) {
  res.render('blog/createBlog', {
    title: 'Create new Post',
    page: 'createB',
  });
});

// Single page route
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
// singlePageEdit.ejs kuris yra kopija singlePage.ejs
// tik su ivesties laukais

module.exports = router;
