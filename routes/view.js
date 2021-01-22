const router = require("express").Router();
const Workout = require("../models/workout");
const path = require("path")

router.get("/", (req, res) => {
    res.send(index.html);
});

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname + "/../public/exercise.html"))
});

router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname + "/../public/stats.html"))
});


module.exports = router;