const express = require('express');
const app = express();
var methodOverride = require('method-override');
const path = require('path');
const {v4: uuidv4} = require('uuid');
uuidv4();

//parsing middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.set('views', path.join(__dirname,'views'))
app.set('view engine','ejs')
app.use(methodOverride('_method'))


//fake data
var comments =[
    { 
        id:uuidv4(),
        username:'Todd',
        comment: 'lol thius is so funny'
    },
    {
        id:uuidv4(),
        username:'Jake',
        comment: 'lol hur hur funny'
    },
    {
        id:uuidv4(),
        username:'Bake',
        comment: 'lol ya right this is so funny'
    },
    {
        id:uuidv4(),
        username:'Blake',
        comment: 'lols so funny'
    }
]

app.get('/comments',(req,res)=>{
    res.render('comments/index',{comments})
})
//sending form to new.
app.get('/comments/new',(req,res)=>{
    res.render('comments/new')
})

app.get('/comments/:id/edit',(req,res)=>{
    const {id} = req.params;
    const comment = comments.find(c=>c.id ===id)
    res.render('comments/edit', {comment})
})
app.get('/comments/:id',(req,res)=>{
    const {id} = req.params;
    const comment = comments.find(c=>c.id ===id)
    res.render('comments/show',{comment})
})

//patch -> edit some only
app.patch('/comments/:id',(req,res)=>{
    const {id} = req.params;
    const newComment = req.body.comment;
    const foundComment = comments.find(c=>c.id ===id)
    foundComment.comment = newComment;
    res.redirect('/comments')
})

app.delete('/comments/:id',(req,res)=>{
    const {id} = req.params;
    comments = comments.filter(c => c.id !==id);
    res.redirect('/comments');
})
app.post('/comments',(req,res)=>{
    const {username,comment} = req.body;
    comments.push({username,comment, id: uuidv4() })
    res.redirect('/comments')
})
app.get('/tacos',(req,res)=>{
    res.send("GET /tacos response")
})

app.post('/tacos',(req,res)=>{
    const {filling, qty} = req.body;
    res.send(`The orders are ${qty} of ${filling} tacos`)
})

app.listen(3000,()=>{
    console.log("Listening on port 3000")
})

