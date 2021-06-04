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

module.exports = {
    owners_index
}