// owners_index owners_single ... 
const Owner = require('../models/owner')

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
}

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
  }

module.exports = {
    owners_index,
    owners_single
}