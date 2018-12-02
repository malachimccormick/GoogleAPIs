const express = require('express');
const path = require('path')
const app = express();
const port = 3000;
require('dotenv').config()
app.set('view engine','pug');
app.use(express.static(__dirname + '/public/'))


app.get('/', (req, res)=>{
    res.render("index.pug")
});

app.get('/Maps', (req,res) =>{
    res.render("maps.pug")
    app.locals.basedir = app.get('/public');
        res.send(process.env.GOOGLE_KEY)
        app.use(express.static(path.join(__dirname, '/public')));
        

});
app.get('/URLshortner', (req,res)=>{
    res.render("urlshortner.pug")
});
app.get('/YouTube',(req,res) =>{
    res.render("youtube.pug")
});
app.listen(port)
// app.listen(port)
