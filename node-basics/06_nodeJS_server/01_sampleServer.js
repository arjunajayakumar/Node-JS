const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {
    fs.readFile("01_sample.html", (err, data) => {
        res.writeHead(200, { "ContentType": "text/html" })
        res.write(data)
        res.end()

    })

})

server.listen(3300)
console.log("Listening on Port 3300")


