import http from 'http';

const server = http.createServer(
  (req: http.IncomingMessage, res: http.ServerResponse) => {
    console.log(`${req.method} => ${req.url}`);
    res.writeHead(200, {
      'Content-Type': 'application/json',
      // 'Content-Type': 'text/javascript',
      // 'Access-Control-Allow-Origin': 'http://localhost:4000',
      // 'Access-Control-Allow-Headers': 'X-Test-Cors',
      // 'Access-Control-Allow-Methods': 'PUT',
      // 'Access-Control-Allow-Methods': 'POST, PUT, PATCH, DELETE',
      // 'Access-Control-Max-Age': 86400,
      'Set-Cookie': ['id=1'],
    });
    res.end(JSON.stringify({ message: 'Hello World!' }));
    // res.end('console.log("Hello World!");');
  },
);

const host = 'localhost';
const port = 4001;
console.log(`Start server on ${host}:${port}`);
server.listen(port, host);
