const mongoose = require('../db/connection') // this links our connection.js to our model

// The schema method creates a blueprint for our Todo (database) model describing the attributes it will have and what data types they will be.
const NbaSchema = new mongoose.Schema(
    {
        Image: String,
        Name: String,
        Position: String,
        League_School: String,
        Height: String,
        Weight: Number,
        FG: Number,
        PTS: Number,
        AST: Number,
        REB: Number,
        STL: Number,
        BLK: Number,
        TO: Number,
        Highlight: String,
        Notes: String
    },
    { timestamps: true }
)

const Nba = mongoose.model('Nba', NbaSchema)


module.exports = Nba