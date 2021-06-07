const express = require('express');
const router = express.Router();

router.get('/new', (req, res) => {
  res.render('house/new', {
    title: 'new house',
    page: 'new_house',
  });
});

module.exports = router;
