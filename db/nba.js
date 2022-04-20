const Nba = require('../models/nba-model')
const nbaData = require('../db/nba.json')

console.log(nbaData)

Nba.deleteMany({})
.then(() => {
    return Nba.insertMany(nbaData)
})
.then(console.log)
    .catch(console.error)
    .finally(() => {
        process.exit()
    })