const House = require('../models/house')

const house_new = (req, res) => {
  const ownersId = req.params.ownersId
  const formArr = [
    {name: 'nr', label: 'Your house number', rq: true, inputType: 'number'},
    {name: 'street', label: 'Enter your street', rq: true},
    {name: 'town', label: 'Enter your town', rq: true},
  ]
    res.render('house/new', {
    title: 'new house',
    page: 'new_house',
    formArr,
    oId: ownersId
  });
};

const house_new_post = (req, res) => {
  const oId = req.params.oId  
  console.log(req.body);
  const houseDetails = {...req.body, ownersId: oId}
  // sukurti nauja house 
  const newHouse = new House(houseDetails);

  newHouse.save() 
    .then(savedHouse => console.log(' savedHouse', savedHouse))
    .catch((err) => console.error(err))

  // redirect i to owners page

  // sukurti paprasta html namo atvaizdavimui 

  res.json(houseDetails)
}

module.exports = {
  house_new,
  house_new_post
};
