const express = require("express");
const app = express();
const port = 3000;
const path = require('path');
const hbs = require('hbs');

const staticPath =  path.join(__dirname, "public");
const partials_path =  path.join(__dirname, "template");

app.set("view engine", 'hbs');
app.use(express.static(staticPath));
hbs.registerPartials(partials_path);




app.get("/home", (req, res)=>{
    res.render("home")
})

app.get("/about", (req, res)=>{
    res.render("about")
})

app.get("/weather", (req, res)=>{
    res.render("weather")
})

app.get("/contact", (req, res)=>{
    res.send("Welcome to contact page")
})

app.get("*", (req, res)=>{
    res.statusCode = 404;
    res.render("404")
})


app.listen(port, ()=>{
    console.log(`Listening to the port ${port}`)
})