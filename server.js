// import express and mongoose
var express = require("express");
var mongoose = require("mongoose");

// create port
var PORT = 3500;

// instance of express app
var app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//routes

// start server
app.listen(PORT, function() {
    console.log("Listening on: localhost:" + PORT);
})

