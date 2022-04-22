// REQUIRE what you need first, CREATE variables to access, SET our view engine for our app, USE

const express = require('express')
const app = express()

const methodOverride = require('method-override')

const nbaController = require('./controllers/nbaController')

app.use(methodOverride('_method'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.set('view engine', 'ejs')
app.use(nbaController)

app.listen(7777, () => {
    console.log("our app is running on port 7777")
})
