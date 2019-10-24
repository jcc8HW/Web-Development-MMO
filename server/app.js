// loads the native path module
const path = require("path");

// loads expressjs module
const express = require("express");

// Instantiates the app
const app = express();


// stores the public directory path
const publicDir = path.join(__dirname, '../../public');


// setting the public directory as a public static folder
app.use(express.static("public"));

console.log(publicDir)

app.get("/", (req, res) => {
    res.sendFile( path.join(__dirname, "/../public/index.html") )
})


app.get("/game", (req, res) => {
    res.sendFile( path.join(__dirname, "../public/game.html") )
})


// exports the app instance
module.exports = app;