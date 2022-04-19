// REQUIRE what you need first, CREATE variables to access, SET our view engine for our app, USE

// Require express, we won't be able to use it without it
const express = require('express')

// Use express to instantiate our app
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.listen(7777, () => {
    console.log("our app is running on port 7777")
})
