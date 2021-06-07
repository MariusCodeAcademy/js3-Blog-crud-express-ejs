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

  // sukurti nauja house 

  // redirect i to owners page
  
  res.json({body: req.body, oId})
}

module.exports = {
  house_new,
  house_new_post
};
