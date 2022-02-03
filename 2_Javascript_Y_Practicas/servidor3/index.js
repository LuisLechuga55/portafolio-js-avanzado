const http = require('http');
const url = require('url');

// PETICIONES
// http://localhost:8080/
// http://localhost:8080/permisos
// http://localhost:8080/loquesea.tx
// http://localhost:8080/solito


// SERVIDOR
const server = http.createServer((req, res) => {

    const urlObject = url.parse(req.url);
    const path = urlObject.path;
    console.log(`Este es mi path: ${path}`);

    let status = 0;
    let responseStr = '';
    let mimeType = { 'Content-Type' : 'application/json' };

    // Controller
    if (path === '/') { // Primer Endpoint, recurso o servicio
        responseStr = { message: 'Ok' }
        status = 200;
    } else if (path === '/permisos') { // Segundo Endpoint, recurso o servicio
        responseStr = { message: 'Forbidden' }
        status = 403;
    } else if (path === '/loquesea.txt') { // Tercer Endpoint, recurso o servicio
        responseStr = { message: 'Request timeout' }
        status = 408;
    } else {
        responseStr = { message: 'Not found' }
        status = 404;
    }

    const responseStringify = JSON.stringify(responseStr);

    res.writeHead(status, mimeType);
    res.write(responseStringify);
    res.end();

});

server.listen(8080);
console.log('Inicie mi servidor');