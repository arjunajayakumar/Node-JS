const http = require("http")
const fs = require("fs")

http.createServer((req, res) => {
    if (req.url === "/") {
        fs.readFile("sample.html", (err, data) => {
            res.writeHead(200, { "content": "text/html" })
            res.write(data)
            res.end()

        })
    } else if (req.url === "/signup") {
        fs.readFile("signup.html", (err, data) => {
            res.write(data)
            res.end()

        })

    } else if (req.url === "/signupaction") {
        res.write("Action!!!!")
        res.end()

    } else {
        res.writeHead(404, { "content-type": "text/html" })
        res.write("ERROR!!!!")
        res.end()
    }
}).listen(5500, () => console.log("Server Listening on 5500"))