const {createServer} = require('http');

let server = createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/html"});

    response.end();

});

server.listen(8000);

console.log("Ouvindo a porta800");




/*const express = require('express');

const app = express();

const PORT = 3000;

app.listen(PORT, function() {
    console.log('API rodando na porta ${PORT}');
});

app.get('/', (req, res) => {
    req.setEncoding("Está funcionando para");

}); */