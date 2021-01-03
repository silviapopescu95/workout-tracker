// import mongoose
const mongoose = require("mongoose");

// create and define schema
const { Schema } = mongoose;

const schema = new Schema(
    {
        day: {
            type: Date,
            default: Date.now,
        },
        exercises: [
          {
            type: {type: String, trim: true, required: "Enter exercise type",},
            name: {type: String, trim: true, required: "Enter exercise name",},
            duration: {type: Number, required: "Enter duration of exercise in minutes.",},
            weight: {type: Number,},
            reps: {type: Number,},
            sets: {type: Number,},
            distance: {type: Number,},
          }    
        ],
    }, 
    { 
      toJSON: {
        virtuals: true,
      },
    }
);

schema.virtual("totalDuration").get(() => {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

// creates model
const Workout = mongoose.model("Workout", schema);

// exports model
module.exports = Workout;