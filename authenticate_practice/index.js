const bcrypt = require('bcrypt');
const express = require('express');
const app = express();
const User = require('./models/user');
const mongoose = require('mongoose');
const session = require('express-session');

mongoose.connect('mongodb://localhost:27017/authDemo', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log("Mongo Connection Open")
})
.catch((e) => {
    console.log("Mongo Error")
    console.log(e)
})


app.set('view engine' , 'ejs');
app.set('views','views');
app.use(express.urlencoded({extended:true}));
app.use(session({secret:'notagoodsecret'}));

const requireLogin = (req,res,next)=>{
    if(!req.session.user_id){
        return res.redirect('login')
    }
    next();
}


app.get('/',(req,res)=>{
    res.send('Homepage')
})

app.get('/register',(req,res)=>{
    res.render('register')
})

app.get('/login',(req,res)=>{
    res.render('login')
})

app.post('/logout',(req,res)=>{
    // req.session.user_id =null;
    req.session.destroy();
    res.redirect('/login');
})

app.post('/login',async (req,res)=>{
    const {username,password}=req.body;
    const user = await User.findOne({username:username});
    const validLogin = await bcrypt.compare(password,user.password);
    if(validLogin){
        req.session.user_id=user._id;
        console.log(req.session)
        res.send('Logged in')
    } else {
        res.send('try again')
    }
})

app.post('/register',async(req,res)=>{
    const {password,username}= req.body;
    const hash = await bcrypt.hash(password,12);
    const user = new User({
        username,
        password :hash
    })
    await user.save();
    req.session.user_id=user._id;
    res.redirect('/')
})

app.get('/secret', requireLogin, (req,res)=>{

    res.render('secret');
})
app.listen(3000,()=>{
    console.log("Server open at port 3000");
})


// // hashPassword('sherman');
// login('sherman','$2b$10$mOjIFWJrkQAiN00KI8xR5uykIbiy0VBrpFT93wa0p1TMpza2CvaaG')