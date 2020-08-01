const express = require('express')

const router = express.Router()


router.get('/all', (req, res) => {
    // todo fetch all teachers from db
    res.send(`working`)
})
router.get('/id/:id', (req, res) => {
    // todo fetch a single student with particular id from db
})
router.post('/add', (req, res) => {
    // todo post/add the teachers data via json body
})


module.exports = router
