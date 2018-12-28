const http = require('http');
const port = 3000;

const requestHandler = function (request, response) {
  console.log(request.url);
  response.end('Hola mundo desde un servidor de Node.js!');
}

const server = http.createServer(requestHandler);

server.listen(port, function (err) {
  console.log(`server is listening on ${port}`);
});