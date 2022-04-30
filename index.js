// REQUIRE what you need first, CREATE variables to access, SET our view engine for our app, USE

const express = require('express')
const app = express()
const port = process.env.PORT || 7777

const methodOverride = require('method-override')


const nbaController = require('./controllers/nbaController')

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use(methodOverride('_method'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(nbaController)

app.set('view engine', 'ejs')

app.listen(port, () => {
    console.log(`the app is running on port ${port}`)
})
