const express = require('express')
const router = express.Router()

const Nba = require('../models/nba-model')


//GET / read / list of players
router.get('/', (req, res) => {
    Nba.find({})
        .then((players) => res.render('index', { nbaPlayers: players }))
        .catch((err) => res.json(err))
})
//New route
router.get('/new', (req, res) => {
    res.render('new');
})

// GET / read / players by college
router.get('/player/:school', (req, res) => {
    const school = req.params.school[0].toUpperCase() + req.params.school.slice(1)
    console.log(school)
    Nba.find({ League_School: school })
        .then((players) => {
            console.log(players)
            res.render('index', { nbaPlayers: players })
        })
        .catch((err) => res.json(err))
})

//GET / read / players by position
router.get('/position/:role', (req, res) => {
    const role = req.params.role.toUpperCase()
    console.log(role)
    Nba.find({ Position: role })
        .then((players) => {
            console.log(players)
            res.render('index', { nbaPlayers: players })
        })
        .catch((err) => res.json(err))
})

// GET / read / players by id
router.get('/:id', (req, res) => {
    Nba.find({ _id: req.params.id })
        .then((players) => {
            res.render('index', { nbaPlayers: players })
        })
        .catch((err) => res.json(err))
})

//Edit route
router.get('/:id/edit', (req, res) => {
    Nba.find({ _id: req.params.id })
        .then((players) => {
            res.render('edit', { nbaPlayers: players })
        })
        .catch((err) => res.json(err))
})

//POST / create / adding players to the database
router.post('/', (req, res) => {
    Nba.create(req.body)
        .then((players) => {
            res.redirect('/')
        })
        .catch((err) => res.json(err))
})

//PUT / update / players information
router.put("/:id/edit", (req, res) => {
    Nba.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then((players) => res.render('index', {nbaPlayers: players}))
});

//PUT / update / notes on a player


//DELETE / delete player from the database
router.delete('/:id', (req, res) => {
    Nba.findOneAndRemove({ _id: req.params.id }).then((players) =>
    res.redirect('/')
);
});


module.exports = router