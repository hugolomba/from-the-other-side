import http from 'http';

const PORT = 8000;

const server = http.createServer(async (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<html><h1>The server is working</h1></html>');
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});