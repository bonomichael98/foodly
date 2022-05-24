const router = require('express').Router();
const { Comment, Post, Vote } = require('../models');

// GET all galleries for homepage
router.get('/', async (req, res) => {
  try {
    // TODO: Add a comment describing how we pass the session to the view
    res.render('homepage', {
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
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
