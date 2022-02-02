const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const urlObject = url.parse(req.url);
    const path = urlObject.path;
    const pathName = urlObject.pathname;
    console.log(`path: ${path} - pathname: ${pathName}`);

    //Validacion de path sollcitado
    // 1. OK
    // 2. No tener Permisos
    // 3. Not found

    // res.writeHead(500, { 'Content-Type' : 'text/plain' } );
    // res.write('Erro en mi servidor');
    // res.end();

});

server.listen(8080);
console.log('Inicie mi servidor');