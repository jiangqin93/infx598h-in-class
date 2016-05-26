"use strict";

const express = require("express");
const movies = require("./data/movies-2015.json");

var port = 9000;
var app = express();
var moviesByGenre = {};

movies.forEach(function(movie) {
    var genre = movie.genre.toLowerCase();
    var moviesForGenre = moviesByGenre[genre];
    if (undefined == moviesForGenre) {
        moviesForGenre = [];
        moviesByGenre[genre] = moviesForGenre;
    } 
    moviesForGenre.push(movie);
});

app.use(express.static(__dirname + "/static"));
//load the index.html & css file
//only look for files under the static files

app.get("/hello", function(req, res) {
    res.send("Hello World!"); 
});

app.get("/hello/:name", function(req, res) {
    res.send("Hello " + req.params.name); 
});

app.get("/movies", function(req, res) {
    res.json(movies);
});

app.get("/movies/genres", function(req, res) {
    var genres = Object.keys(moviesByGenre);
    res.json(genres);
});

app.get("/movies/genres/:genre", function(req, res) {
    var m = moviesByGenre[req.params.genre];
    if (undefined == m) {
        res.status(404);
        res.send("invaid genre");
    }
    else {
        res.json(m);
    }
});

app.listen(port, function() {
    console.log("Server is listening..."); 
});


