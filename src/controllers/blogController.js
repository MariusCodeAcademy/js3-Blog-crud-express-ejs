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

function blog_show_create(req, res) {
  res.render('blog/createBlog', {
    title: 'Create new Post',
    page: 'createB',
  });
}

function blog_single(req, res) {
  const blogId = req.params.id;

  Post.findById(blogId)
    .then((foundPost) => {
      res.render('blog/singlePage', {
        title: 'Post about ...',
        page: 'single',
        post: foundPost,
      });
    })
    // redirect if not found
    .catch((err) => res.redirect('/blog'));
}

function blog_single_edit(req, res) {
  const blogId = req.params.id;

  Post.findById(blogId)
    .then((foundPost) => {
      console.log(' foundPost', foundPost);
      res.render('blog/singlePageEdit', {
        title: 'Post about ...',
        page: 'single_edit',
        post: foundPost,
      });
    })
    // redirect if not found
    .catch((err) => res.redirect('/blog'));
}

module.exports = {
  blog_index,
  blog_show_create,
  blog_single,
  blog_single_edit,
};
