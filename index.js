const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const db = require('./db')


const studentRoutes = require('./routes/student_routes')
const teacherRoutes = require('./routes/teacher_routes')

const app = express()
const port = 3000

app.use(cors())

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/students', studentRoutes)
app.use('/teachers', teacherRoutes)

app.get('/', (req, res) => {
    res.send(`<h1>Home Page</h1>`)
})


try {
    mongoose.connect(`mongodb+srv://${db.username}:${db.pass}@${db.cluster}/${db.database}`, () => {
        console.log(`Connected to db`)
    })
} catch{
    console.log(`errr`)
}


app.listen(port, () => {
    console.log(`Server  strated at ${port}`)
})