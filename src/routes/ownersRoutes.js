const express = require('express');
const router = express.Router();

const Owner = require('../models/owner');

// load controllers
const ownersControllers = require('../controllers/ownersController')

router.get('/', ownersControllers.owners_index);

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

router.post('/edit/:id', (req, res) => {
  Owner.findByIdAndUpdate(req.params.id, req.body)
    .then((updatedObj) => {
      res.redirect('/owners?msg=updated&name=' + updatedObj.name);
    })
    .catch((err) => console.error(err));
});
// naujas routas POST /owners/edit/id
// atspausdinti konsoleje ir grazinti vartotojui formos duomenis

module.exports = router;
