const express = require('express');
const router = express.Router();

// load controllers
const ownersControllers = require('../controllers/ownersController');

// all owners
router.get('/', ownersControllers.owners_index);
// get single owner
router.get('/single/:id', ownersControllers.owners_single);
// formos parodymo route
router.get('/new', ownersControllers.owners_show_form);
// formos apdorojimo routas
router.post('/new', ownersControllers.owners_new);
// delete form
router.post('/delete/:id', ownersControllers.owners_delete);
// edit route
router.get('/edit/:currentId', ownersControllers.owner_show_edit);
// edit post save
router.post('/edit/:id', ownersControllers.owner_edit_save);

module.exports = router;
