const express = require('express')
const Student = require('../models/sudentModel')

const router = express.Router()


router.get('/all', (req, res) => {
    // todo fetch all students from db
    const students = Student.find().then(data => {
        res.send(data[1].age.toString())
    })
})
router.get('/id/:id', (req, res) => {
    // todo fetch a single student with particular id from db
    const students = Student.find({ "_id": req.params.id }).then(data => {
        res.send(data)
    })
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