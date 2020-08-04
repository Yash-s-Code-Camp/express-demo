const mongoose = require('mongoose')

const teacherSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Teachers', teacherSchema)