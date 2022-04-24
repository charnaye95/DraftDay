const express = require('express')
const router = express.Router()

const Nba = require('../models/nba-model')


//GET / read / list of players
router.get('/', (req,res) => {
    Nba.find({})
    .then((players) => res.render('index', {nbaPlayers: players}))
})

// GET / read / players by college
// router.get('/:id', (req,res) => {
//    console.log(req.params)
//     Nba.find({Image: {$exists: true}})    
//     .then((players) => res.render('index', {nbaPlayers: players}))
// })

//GET / read / players by position
// router.get('/:id', (req,res) => {
//     id = req.params.Position
//     Nba.findById({id})
//     .then((players) => res.render('index', {nbaPlayers: players}))
// })
//POST / create / adding players to the database


//PUT / update / players information

//PUT / update / notes on a player


//DELETE / delete player from the database


module.exports = router