const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res){
    res.render("index");
})

app.get("/about", function (req, res){
    res.render("about");
})

app.get("/home", function (req, res){
    res.render("home", {name: "tejas"});
})
// line no. 60 in home.ejs file



app.listen(3000);