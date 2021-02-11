const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp')
.then(()=>{
    console.log("connection open!")
})
.catch(err=>{
    console.log("Error!")
    console.log(err)
})

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
        min:[0,'Price has to be greater than $0']
    },
    onSale:{
        type:Boolean,
        default:false,
    },
    categories : [String],
    qty:{
        online:{
            type:Number,
            default:0
        },
        inStore:{
            type:Number,
            default:0
        }
    },
    size:{ 
        type:String,
        enum: ['S','M','L']}
});

productSchema.methods.hello = function(){
    console.log("Function hello world!")
}

productSchema.methods.toggleOnSale = function(){
    this.onSale = !this.onSale;
    this.save();
}

productSchema.static.fireSale = function

const Product = mongoose.model('Product',productSchema);

const findProduct = async ()=>{
    const foundProduct = await Product.findOne({name:'Flex Grip Handles'});
    foundProduct.hello();
}


// const shirt = new Product({name:'Jersey', price:69.99,size:"S"})
// shirt.save()
// .then(data=>{
//     console.log("It worked")
//     console.log(data);
// })
// .catch(err=>{
//     console.log("Error!")
//     console.log(err)
// })

Product.findOneAndUpdate({name:'Flex Grip Handles'},{price:99.99},{runValidators:true})
.then(data=>{
    console.log("yes")
    console.log(data)
})
.catch(err=>{
    console.log(err)
})