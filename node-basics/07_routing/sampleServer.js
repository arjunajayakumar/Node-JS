const http = require("http")
const fs = require("fs")
const url = require("url")

http.createServer((req, res) => {
    const q = url.parse(req.url, true)
    console.log(q.path)
    if (q.pathname === "/") {
        fs.readFile("sample.html", (err, data) => {
            res.writeHead(200, { "content": "text/html" })
            res.write(data)
            res.end()

        })
    } else if (q.pathname === "/signup") {
        fs.readFile("signup.html", (err, data) => {
            res.write(data)
            res.end()

        })

    } else if (q.pathname === "/signupaction") {
        res.writeHead(200, { "content-type": "text/html" })
        res.write("<h1>" + q.query.fName + "</h1>")
        res.end()

    } else {
        res.writeHead(404, { "content-type": "text/html" })
        res.write("ERROR!!!!")
        res.end()
    }
}).listen(5500, () => console.log("Server Listening on 5500"))