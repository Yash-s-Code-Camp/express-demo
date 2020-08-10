const express = require('express')
const Student = require('../models/sudentModel')

const router = express.Router()



// routes for CRUD operations

router.get('/all', (req, res) => {
    // todo fetch all students from db
    const students = Student.find().then(data => {
        res.send(data)
    }).catch(e => {
        res.send(e).statusCode(500)
    })
})

router.get('/id/:id', (req, res) => {
    // todo fetch a single student with particular id from db
    const students = Student.find({ "_id": req.params.id }).then(data => {
        res.send(data)
    }).catch(e => {
        res.send(e).statusCode(500)
    })
})

router.post('/add', (req, res) => {
    // todo post/add the students data via json body

    if (!req.body.name && !req.body.age) {
        res.status(400).send(`body is empty`)
    } else {
        const student = new Student({
            name: req.body.name,
            age: req.body.age
        })

        student.save().then(data => {
            res.send("Student added." + (data))
        }).catch(e => {
            res.send(e).statusCode(500)
        })
    }
})

router.put('/id/:id', (req, res) => {

    if (!req.body.name && !req.body.age) {
        res.status(400).send(`body is empty`)
    }
    else {

        const student = Student.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            age: req.body.age
        }).then((data) => {
            res.send(`successfully updated: ${req.params.id}`)
        }).catch(e => {
            res.send(e).statusCode(500)
        })
    }
})

router.delete('/id/:id', (req, res) => {
    const student = Student.findByIdAndDelete(req.params.id).then((data) => {
        res.send(`successfully deleted: ${req.params.id}`)
    }).catch(e => {
        res.send(e).statusCode(500)
    })
})



module.exports = router