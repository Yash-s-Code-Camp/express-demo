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
router.put('/id/:id', (req, res) => {

    if (!req.body.name && !req.body.age) {
        res.status(400).send(`body is empty`)
    }
    else {

        const teacher = Teacher.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            subject: req.body.subject
        }).then((data) => {
            res.send(`successfully updated: ${req.params.id}`)
        }).catch(e => {
            res.send(e).statusCode(500)
        })
    }
})

router.delete('/id/:id', (req, res) => {
    const teacher = Teacher.findByIdAndDelete(req.params.id).then((data) => {
        res.send(`successfully deleted: ${req.params.id}`)
    }).catch(e => {
        res.send(e).statusCode(500)
    })
})


module.exports = router
