const house_new = (req, res) => {
  res.render('house/new', {
    title: 'new house',
    page: 'new_house',
  });
};

module.exports = {
  house_new,
};
