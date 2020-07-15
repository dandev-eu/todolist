const express = require("express")
const bodyParser = require("body-parser")

const app = express()

let tasks = []

// EJS engine template
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req,res)=> {

    const today = new Date()
    const days = [
        'Sunday', 'Monday', 'Tuesday',
        'Wednesday', 'Thursday', 'Friday',
        'Saturday', 
    ]

    res.render('list', {today: days[today.getDay()], tasks: tasks})
})

app.post("/", (req, res)=> {
    tasks.push(req.body.task)
    res.redirect("/")
})
app.listen(3000, ()=> {
    console.log("Server is running on port 3000")
})