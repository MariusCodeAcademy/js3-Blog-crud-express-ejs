const Post = require('../models/post');

function blog_index(req, res) {
  // parsisiusti duomenis is db
  Post.find()
    .then((posts) => {
      res.render('blog/blog', {
        title: 'Our blog',
        page: 'blog',
        posts,
      });
    })
    .catch((err) => console.error(err.message));
}

module.exports = {
  blog_index,
};
