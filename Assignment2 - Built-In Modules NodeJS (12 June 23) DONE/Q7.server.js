const http = require('http');

let PORT = 4021;
let HOSTNAME = 'localhost'

let server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('<h1>I Am Happy To Learn Full Stack Web Development From PW Skills!</h1>')
    }
})

server.listen(PORT, () => {
    console.log(`The HTTP Server is running on ${HOSTNAME}: ${PORT}`);
})