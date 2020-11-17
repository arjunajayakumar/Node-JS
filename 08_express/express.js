const express = require("express")
const app = express()
const path = require("path")
const bodyParser = require("body-parser")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text({ type: 'text/html' }))
// Perform any actions before signup(cookies, authentication etc....
app.use((req, res, next) => {
    console.log("Hello")
    next()
})

// app.get("/", (req, res) => {
//     res.send("start")
// })

app.get("/signup", (req, res) => {
    res.sendFile(path.join(__dirname, "signup.html"))
})

// app.use((req, res, next) => {
//     console.log("End")
//     next()
// })

app.post("/signup", (req, res) => {

    console.log(req.body)

    res.send("Account Created")
})

app.listen(5500, () => console.log("Server listening on 5500"))

