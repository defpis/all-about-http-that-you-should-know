import http from 'http';
import fs from 'fs';

const server = http.createServer(
  (req: http.IncomingMessage, res: http.ServerResponse) => {
    console.log(`${req.method} => ${req.url}`);
    const html = fs.readFileSync('./src/index.html', 'utf-8');
    res.writeHead(200, {
      'Content-Type': 'text/html',
      // 'Content-Type': 'text/plain',
    });
    res.end(html);
  },
);

const host = 'localhost';
const port = 4000;
console.log(`Start server on ${host}:${port}`);
server.listen(port, host);
