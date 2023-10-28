const express = require('express')
const app = express()

app.get('/', function (req, res){
    res.send('Hello World')
})

app.get('/profile', function(req, res){
    res.send("hello from profile")
})

app.get('/profile/harsh', function(req, res){
    res.send("hello from harsh")
})

app.get('/profile/:username', function(req, res){
    res.send(`hello from ${req.params.username}`)
})



app.listen(3000)