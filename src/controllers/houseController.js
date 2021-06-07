const house_new = (req, res) => {
  
  const formArr = [
    {name: 'street', label: 'Enter your street', rq: true},
    {name: 'town', label: 'Enter your town', rq: true},
    {name: 'nr', label: 'Your house number', rq: true, inputType: 'number'},
  ]
    res.render('house/new', {
    title: 'new house',
    page: 'new_house',
    formArr
  });
};

const house_new_post = (req, res) => {
    res.send('You have set a form')
}

module.exports = {
  house_new,
  house_new_post
};
