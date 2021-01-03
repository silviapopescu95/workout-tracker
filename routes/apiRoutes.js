// Imports models
const Workout = require("../models/workout");

// create router
const router = require("express").Router();

// GET workouts
router.get("/api/workouts", function(req, res) {
    Workout.find()
      .then(function(data) {
          res.json(data)
      }).catch(function(err) {
          res.json(err);
      });
});

// POST workouts
router.post("/api/workouts", function(req, res) {
    Workout.create({})
      .then(function(data) {
        res.json(data)
    }).catch(function(err) {
        res.json(err);
    });
});

// GET range
router.get("/api/workouts/range", function(req, res) {
    Workout.find()
      .then(function(data) {
          res.json(data)
      }).catch(function(err) {
          res.json(err);
      });
});

// POST range
router.post("/api/workouts/range", function(req, res) {
    Workout.create({})
      .then(function(data) {
        res.json(data)
    }).catch(function(err) {
        res.json(err);
    });
});

// PUT to update workouts
router.put("/api/workouts/:id", function({ body, params }, res) {
    Workout.findByIdAndUpdate(params.id, { $push: {exercises: body } }, { new: true, runValidators: true })
      .then(function(data) {
          res.json(data)
      }).catch(function(err) {
          res.json(err);
      });
});

// exports router
module.exports = router;