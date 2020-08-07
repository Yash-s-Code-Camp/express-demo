const express = require('express')

const Teacher = require('../models/teacherModel')

const router = express.Router()


router.get('/all', (req, res) => {
    const teachers = Teacher.find().then(data => {
        res.send(data)
    })
})
router.get('/id/:id', (req, res) => {
    // todo fetch a single teacher with particular id from db
    const teachers = Teacher.find({ "_id": req.params.id }).then(data => {
        res.send(data)
    })
})
router.post('/add', (req, res) => {
    // todo post/add the teachers data via json body
    const teacher = new Teacher({
        name: req.body.name,
        subject: req.body.subject
    })

    teacher.save().then(data => {
        res.send("teacher added." + (data))
    })
})


module.exports = router
