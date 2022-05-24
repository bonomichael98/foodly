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
router.get('/post/:id', (req, res) => {
  Post.findOne({
    where: {
        id: req.params.id
    },
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
    if (!dbPostData) {
      res.status(404).json({ message: 'No post found with this id' });
      return;
    }

    const post = dbPostData.get({ plain: true });

    res.render('single-post', {
      post,
      loggedIn: req.session.loggedIn
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
})

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
