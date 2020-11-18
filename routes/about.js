const express = require("express")
const router = express.Router()

router.get('/', (req, res) => {
    res.render('about', { title: "MERN Stack Web Developement", body: "Mongo DB, Express, React, Ngnix" })
})


module.exports = router