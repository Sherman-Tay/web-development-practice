const mongoose = require('mongoose');

const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/superMarket', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Mongo Connection Open")
})
    .catch((e) => {
        console.log("Mongo Error")
        console.log(e)
    })


// const p = new Product({
//     name: 'Apple',
//     price: 0.50,
//     category:'fruit',
// })
// p.save()
// .then(data=>{
//     console.log(data)
// })
// .catch(e=>{
//     console.log(e)
// })

const seedProducts = [
    {
        name: 'Apple',
        price: 0.50,
        category:'fruit',
    },
    {
        name: 'celery',
        price: 0.30,
        category:'vegetable',
    },
    {
        name: 'milk',
        price: 1.50,
        category:'dairy',
    },
    {
        name: 'Orange',
        price: 0.90,
        category:'fruit',
    },
    {
        name: 'pork',
        price: 6.50,
        category:'meat',
    }
]

Product.insertMany(seedProducts)
.then(res=>{
    console.log(res)
})
.catch(e=>{
    console.log(e)
})