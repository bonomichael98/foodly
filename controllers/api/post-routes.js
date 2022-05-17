const router = require('express').Router();
const { Router } = require('express');
const sequelize = require('../../config/connection');
const { Post, User, Comment, Vote, Recipes } = require('../../models');


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
        body: req.body.body,
        user_id: req.body.user_id
    })
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