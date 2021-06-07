const express = require('express');
const router = express.Router();

const Owner = require('../../models/owner');

router.get('/search', (req, res) => {
  res.json({ seaching: 'for something' });
});

router.post('/search', (req, res) => {
  const searchTerm = req.body.search;

  const searchRegex = new RegExp(searchTerm, 'i');

  Owner.find({ name: searchRegex })
    .sort({ updatedAt: -1 })
    .then((found) => {
      res.json({ searchFor: req.body.search, found });
    })
    .catch((err) => console.error(err));
  // gauti visus ownerius

  //kurie atitnika search term
});

// 1. prisijungiam js faila prie owners index

// 2 perimam formos valdyma, e.preventDefault

// 3. Inputui dedam event listeneri 'input'

// 4. ivykus inputui siunciam fetch i /api/owners/search

// 5 api grazina mums json masyva

// 6 is masyvo sugeneruojam owneriu li el

// 7 paisdaryt 404.ejs puslapi kuris uzsikrauna kai neranda puslapop (OOPs vietoj)

module.exports = router;
