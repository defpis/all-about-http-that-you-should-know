import * as http from 'http';

const server = http.createServer(
  (req: http.IncomingMessage, res: http.ServerResponse) => {
    console.log(`${req.method} ${req.url}`);
    res.write('Hello World!');
    res.end();
  },
);

const host = 'localhost';
const port = 4000;
console.log(`Start server on ${host}:${port}`);
server.listen(port, host);
