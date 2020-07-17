const express = require("express")
const bodyParser = require("body-parser")
const date = require(__dirname + '/date.js')

const app = express()

let tasks = []

// EJS engine template
app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))


app.get("/", (req,res)=> {
    // add from module date
    const today = date.getDay()
    res.render('list', {today: today, tasks: tasks})
})

app.post("/", (req, res)=> {
    tasks.push(req.body.task)
    res.redirect("/")
})

app.get("/clear", (req, res)=> {
    tasks = []
    res.redirect("/")
})

app.listen(3000, ()=> {
    console.log("Server is running on port 3000")
})