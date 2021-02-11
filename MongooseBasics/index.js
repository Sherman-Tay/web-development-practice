const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieDb', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connection Open")
})
    .catch((e) => {
        console.log("Error")
        console.log(e)
    })

//JS side as a template for a model.
const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    rating: String,
    score: Number,
    released:Date

})

const Movie = mongoose.model('Movie',movieSchema);
// const getout = new Movie({title:'Get Out', year:2019, score:9.5, rating:'R'})

//returns promise
// Movie.insertMany([
//     {title:'Harry Potter 1', year:2000, score:3, rating:'PG'},
//     {title:'Harry Potter 2', year:2003, score:4, rating:'PG'},
//     {title:'Harry Potter 3', year:2006, score:5, rating:'PG'},
//     {title:'Harry Potter 4', year:2009, score:7, rating:'PG'},
//     {title:'Harry Potter 5', year:2012, score:7, rating:'PG'},
// ])
//     .then(data =>{
//         console.log("data uploaded!")
//         console.log(data)
//     })  