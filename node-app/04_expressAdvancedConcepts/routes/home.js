const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index', { title: 'My express app', name: 'Hello' })
})


module.exports = router