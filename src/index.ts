import http from 'http';
import fs from 'fs';

const server = http.createServer(
  (req: http.IncomingMessage, res: http.ServerResponse) => {
    console.log(`${req.method} => ${req.url}`);

    if (req.url === '/redirect') {
      res.writeHead(302, {
        Location: 'http://localhost:4001/api',
      });
      res.end();
    } else {
      const html = fs.readFileSync('./src/index.html', 'utf-8');
      res.writeHead(200, {
        'Content-Type': 'text/html',
        // 'Content-Type': 'text/plain',
        'Content-Security-Policy': 'default-src http; https;',
      });
      res.end(html);
    }
  },
);

const host = 'localhost';
const port = 4000;
console.log(`Start server on ${host}:${port}`);
server.listen(port, host);
