const router = require('express').Router();
const { Router } = require('express');
const sequelize = require('../../config/connection');
//Tags added to the below variable
const { Post, User, Comment, Vote, Tags } = require('../../models');

//directory is http://localhost:3001/api/post

router.get('/', (req, res) => {
    Post.findAll()
})

router.get('/:id', (req,res) => {
    Post.findOne({
        where: {
            id: req.params.id
        }
    })
})

router.post('/', (req, res) => {
    Post.create({
        title: req.body.title,
        post_body: req.body.post_body,
        tag_id: req.body.tag_id,
        ingredients: req.body.ingredients,
        user_id: req.body.user_id
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
})

router.put('/upvote', (req, res) => {
    Post.upvote({ ...req.body, user_id: req.session.user_id }, { Vote, Comment, User })
})

router.put('/:id', (req, res) => {
    Post.update(
        {
        title: req.body.title,
        body: req.body.body
        },
        {
        where:{
            id: req.params.id
        },

    })
})

module.exports = router;