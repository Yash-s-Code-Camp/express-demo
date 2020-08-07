const express = require('express')
const mongoose = require('mongoose')


const studentRoutes = require('./routes/student_routes')
const teacherRoutes = require('./routes/teacher_routes')

const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/students', studentRoutes)
app.use('/teachers', teacherRoutes)

app.get('/', (req, res) => {
    res.send(`<h1>Home Page</h1>`)
})

try {
    mongoose.connect('mongodb+srv://yashdesai:hUD4qK2FcGB3Qu2W@cluster0-bnurt.gcp.mongodb.net/express-demo', () => {
        console.log(`Connected to db`)
    })
} catch{
    console.log(`errr`)
}

app.listen(port, () => {
    console.log(`Server  strated at ${port}`)
})