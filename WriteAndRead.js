const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>First Page</title></head>');
        res.write('<body>');
        
        
        fs.readFile('message.txt', 'utf8', (err, data) => {
            if (!err && data) {
                const messages = data.split('\n');
                res.write('<h1>Messages:</h1>');
                res.write('<ul>');
                messages.forEach((message) => {
                    res.write(`<li>${message}</li>`);
                });
                res.write('</ul>');
            }
            
            res.write('<form action="/message" method="POST"><input type="text" name="message">');
            res.write('<button type="submit">Send</button></form>');
            res.write('</body>');
            res.write('</html>');
            return res.end();
        });
    }

    
    if (url === '/message' && method === 'POST') {
       
    }
    
});

server.listen(3000);
