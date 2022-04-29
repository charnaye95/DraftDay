const express = require('express')
const router = express.Router()

const Nba = require('../models/nba-model')


//GET / read / list of players
router.get('/', (req,res) => {
    Nba.find({})
    .then((players) => res.render('index', {nbaPlayers: players}))
    .catch((err) => res.json(err))
})

// GET / read / players by college
router.get('/:school', (req,res) => {
const school = req.params.League_School
    Nba.find({League_School: {$eq: school}})    
    .then((players) => res.render('index', {nbaPlayers: players}))
})

//GET / read / players by position
router.get('/:role', (req,res) => {
    const role = req.params.Position
    Nba.findById({Position: {$eq: role}})
    .then((players) => res.render('index', {nbaPlayers: players}))
})
//POST / create / adding players to the database


//PUT / update / players information

//PUT / update / notes on a player


//DELETE / delete player from the database


module.exports = router