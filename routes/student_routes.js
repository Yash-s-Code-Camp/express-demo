const express = require('express')
const Student = require('../models/sudentModel')

const router = express.Router()


router.get('/all', (req, res) => {
    // todo fetch all students from db
    res.send(`working`)
})
router.get('/id/:id', (req, res) => {
    // todo fetch a single student with particular id from db
})
router.post('/add', (req, res) => {
    // todo post/add the students data via json body

    const student = new Student({
        name: req.body.name,
        age: req.body.age
    })

    student.save().then(data => {
        res.send("Student added." + (data))
    })


})


module.exports = router