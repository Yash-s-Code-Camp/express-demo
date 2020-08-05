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

mongoose.connect('mongodb+srv://yashdesai:0ar7ja2d0YSApyeC@cluster0-bnurt.gcp.mongodb.net/express-demo', () => {
    console.log(`Connected to db`)
})

app.listen(port, () => {
    console.log(`Server  strated at ${port}`)
})