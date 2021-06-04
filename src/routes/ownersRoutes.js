const express = require('express');
const router = express.Router();

const Owner = require('../models/owner');

router.get('/', (req, res) => {
  // was there a delete
  console.log(' req.query', req.query);
  const msg = req.query.msg;
  // get all owners from db
  Owner.find()
    .sort({ createdAt: -1 })
    .then((found) => {
      // generate list items with owners name and email
      res.render('owners/index', {
        title: 'Owners',
        page: 'owners',
        owners: found,
        msg,
      });
    })
    .catch((err) => console.error(err));
  // pass owners to view
});

// get single owner
router.get('/single/:id', (req, res) => {
  // find by id

  Owner.findById(req.params.id)
    .then((found) => {
      res.render('owners/single', {
        title: 'Single',
        page: 'single_owner',
        found,
      });
    })
    .catch((err) => console.error(err));
});

// formos parodymo route
router.get('/new', (req, res) => {
  res.render('owners/new', {
    title: 'Add owner',
    page: 'owners_new',
  });
});

// formos apdorojimo routas
router.post('/new', (req, res) => {
  console.log(' req.body', req.body);

  const newOwner = new Owner(req.body);
  newOwner
    .save()
    .then((result) => {
      res.redirect('/owners?msg=created');
    })
    .catch((err) => res.send('Opps did not save', err));
});

// delete form
router.post('/delete/:id', (req, res) => {
  Owner.findByIdAndDelete(req.params.id)
    .then((result) => res.redirect('/owners?msg=deleted'))
    .catch((err) => res.send(`delete failed ${err}`));
});

module.exports = router;
