const express = require('express');
const path = require('path')
const app = express();
const port = 3000;

app.set('view engine','pug');
app.use(express.static(__dirname + '/public/'))


app.get('/', (req, res)=>{
    res.render("index.pug")
});

app.get('/Maps', (req,res) =>{
    res.render("Maps.pug")
        app.use(express.static(path.join(__dirname, '/public')));
});
app.get('/URLshortner', (req,res)=>{
    res.render("index.pug")
});
app.get('/YouTube',(req,res) =>{
    res.render("index.pug")
});
app.listen(port)
