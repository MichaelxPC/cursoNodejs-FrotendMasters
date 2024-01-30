import http from 'node:http'

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Test')
})

server.listen(4001, () => {
    console.log('http://127.0.0.1:4000');
})