const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/api/workouts", (req, res) => {
    Workout.create(req.body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        })
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
    console.log(body);
    console.log(params.id);
    Workout.findByIdAndUpdate(params.id, {
        $push: {
            exercises: body
        }
    })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        })
});

router.get("/api/workouts", (req, res) => {
    Workout.find({}).then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find({}).limit(7).then(dbWorkout => {
        console.log(dbWorkout)
        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    })
})

router.delete("/api/workouts", ({
    body
}, res) => {
    Workout.findByIdAndDelete(body.id).then(() => {
        res.json(true)
    }).catch(err => {
        res.json(err);
    });
});

module.exports = router;