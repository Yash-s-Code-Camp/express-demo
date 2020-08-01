const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    }
})

module.exports = mongoose.model('Students', studentSchema)