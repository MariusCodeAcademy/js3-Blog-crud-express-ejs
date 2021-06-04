const express = require('express');
const router = express.Router();

const Owner = require('../models/owner');

router.get('/', (req, res) => {
  // was there a delete
  console.log(' req.query', req.query);
  const feedback = req.query;
  // get all owners from db
  Owner.find()
    .sort({ createdAt: -1 })
    .then((found) => {
      // generate list items with owners name and email
      res.render('owners/index', {
        title: 'Owners',
        page: 'owners',
        owners: found,
        feedback,
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
      res.redirect('/owners?msg=created&name=' + result.name);
    })
    .catch((err) => res.send('Opps did not save', err));
});

// delete form
router.post('/delete/:id', (req, res) => {
  Owner.findByIdAndDelete(req.params.id)
    .then((result) => res.redirect('/owners?msg=deleted&name=' + result.name))
    .catch((err) => res.send(`delete failed ${err}`));
});

// edit route
// /owners/edit/id
router.get('/edit/:currentId', (req, res) => {
  const currentId = req.params.currentId;

  // surasti ir paduoti i renderi owneri kurio id yra currentId
  Owner.findById(currentId)
    .then((currentOwner) => {
      res.render('owners/edit', {
        title: 'Edit owner',
        page: 'edit_owner',
        currentOwner,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).redirect('/owners');
    });
});
// gauti id nurodyto route duomenis ir paduoti i edit view
// view faile uzpildyti inputus su reiksmem pagal id

// naujas routas POST /owners/edit/id
// atspausdinti konsoleje ir grazinti vartotojui formos duomenis

module.exports = router;
