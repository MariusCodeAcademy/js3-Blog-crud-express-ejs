const express = require('express');
const router = express.Router();

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

// contact page
router.get('/contact', function (req, res) {
  res.render('contact', {
    title: 'Contact us',
    page: 'contact',
  });
});

module.exports = router;
