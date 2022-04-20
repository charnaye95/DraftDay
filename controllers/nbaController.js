const express = require('express')
const router = express.Router()

const Nba = require('../models/nba-model')

//Create

//Read
router.get('/', (req,res) => {
    Nba.find({})
    .then((players) => res.render("index", {nbaPlayers: players}))
})

//Update

//Delete

module.exports = router