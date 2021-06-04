// owners_index owners_single ...
const Owner = require('../models/owner');

const owners_index = (req, res) => {
  //   console.log(' req.query', req.query);
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
};

const owners_single = (req, res) => {
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
};

const owners_show_form = (req, res) => {
  res.render('owners/new', {
    title: 'Add owner',
    page: 'owners_new',
  });
};

const owners_new = (req, res) => {
  console.log(' req.body', req.body);

  const newOwner = new Owner(req.body);
  newOwner
    .save()
    .then((result) => {
      res.redirect('/owners?msg=created&name=' + result.name);
    })
    .catch((err) => res.send('Opps did not save', err));
};

const owners_delete = (req, res) => {
  Owner.findByIdAndDelete(req.params.id)
    .then((result) => res.redirect('/owners?msg=deleted&name=' + result.name))
    .catch((err) => res.send(`delete failed ${err}`));
};

const owner_show_edit = (req, res) => {
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
};

const owner_edit_save = (req, res) => {
  Owner.findByIdAndUpdate(req.params.id, req.body)
    .then((updatedObj) => {
      res.redirect('/owners?msg=updated&name=' + updatedObj.name);
    })
    .catch((err) => console.error(err));
};

const owner_seach = (req, res) => {
  // get budu siunciamos formos parametrai yra req.query
  console.log(req.query);
  res.send('you are in right place');
};

module.exports = {
  owners_index,
  owners_single,
  owners_show_form,
  owners_new,
  owners_delete,
  owner_show_edit,
  owner_edit_save,
  owner_seach,
};
