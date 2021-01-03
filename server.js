// import express and mongoose
var express = require("express");
var mongoose = require("mongoose");
var logger = require("morgan");

// create port
var PORT = 3500;

// instance of express app
var app = express();

var dbConnection = "mongodb+srv://mixmastersilv:dumbass@cluster0.f1kij.mongodb.net/workout-tracker?retryWrites=true&w=majority"

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(logger("dev"));

//connect to mongoose
mongoose.connect(dbConnection, {
  useNewUrlParser: true,
  useFindAndModify: false
});

//routes
app.use(require("./routes/apiRoutes"));
app.use(require("./routes/htmlRoutes"));

// start server
app.listen(PORT, function() {
    console.log("Listening on: http://localhost:" + PORT);
})

