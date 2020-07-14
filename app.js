const express = require("express")
const bodyParser = require("body-parser")

const app = express()

// EJS engine template
app.set('view engine', 'ejs')

app.get("/", (req,res)=> {

    const today = new Date()
    const days = [
        'Sunday', 'Monday', 'Tuesday',
        'Wednesday', 'Thursday', 'Friday',
        'Saturday', 
    ]

    res.render('list', {today: days[today.getDay()],})
})

app.listen(3000, ()=> {
    console.log("Server is running on port 3000")
})