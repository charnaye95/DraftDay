const mongoose = require('mongoose')

const mongoURI =
    process.env.NODE_ENV === 'production'
        ? process.env.DB_URL
        : DB_URL='mongodb+srv://charnaye95:naye95@cluster1.klor5.mongodb.net/DraftDay?retryWrites=true&w=majority';
        
mongoose.connect(process.env.MONGODB_URI || mongoURI)
.then(instance =>
    console.log(`Connected to db: ${instance.connections[0].name}`))
.catch(error => console.log('Connection failed!', error));

module.exports = mongoose