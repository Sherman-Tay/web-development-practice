const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,'Cannot be Blank']
    },
    password:{
        type:String,
        required:[true,'Cannot be Blank']
    }
})

module.exports = mongoose.model('User',userSchema);