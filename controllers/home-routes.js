const router = require('express').Router();
const { Post, Vote, User } = require('../models');

// GET all galleries for homepage
router.get('/', async (req, res) => {
  Post.findAll({
    attributes: [
        'id',
        'title',
        'post_body',
        'ingredients',
        'user_id',
        'created_at'
    ],
    include : [
        {
            model: User,
            attributes: ['username']
        }
    ]
  })
  .then(dbPostData => {
    const posts = dbPostData.map(post => post.get({ plain: true }));

    res.render('homepage', { posts });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json
  })
});

// Login route
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // Otherwise, render the 'login' template
  res.render('login');
});

router.get('/new-post', (req,res) => {
  res.render('add-post')
})

module.exports = router;
