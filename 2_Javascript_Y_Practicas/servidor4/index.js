const http = require('http');
const url = require('url');
const fs = require('fs');

const CONTENT_TYPE = 'Content-Type';

const MIME = {
    html: 'text/html',
    css: 'text/cs',
    jpg: 'image/jpg',
    icon: 'image/x-icon',
    mp3: 'audio/mpeg3',
    mp4: 'audio/mp4',
    json: 'application/json'
};


const server = http.createServer((req, res) => {

    const urlObject = url.parse(req.url);
    const path = urlObject.path;
    console.log(`Este es mi path: ${path}`);
    let response = '';
    let status = 0;


    let fileSystemPath = `static/${path}`;

    fs.stat(fileSystemPath, error => {
        if (!error){
            fs.readFile(fileSystemPath, (error, file) => {
                
                if (!error) {
                    status = 200;
                    const aux = path.split('.')
                    const extension = aux[ aux.length-1 ];
                    const mimeFile = mime[ extension ]
                    // Ok y devuelve el archivo solicitado
                    res.writeHead(status, { CONTENT_TYPE : mimeType } );
                    res.write(file);
                    res.end();

                } else {
                    status = 500;
                    res.writeHead(500, { CONTENT_TYPE : MIME.json } );
                    response = { message: 'Internal server error' };
                    res.write(response);
                    res.end();
                }
            })

        } else {
            status = 404;
            res.writeHead(404, { CONTENT_TYPE : MIME.json } );
            response = { message: 'Npt found' };
            res.write(response);
            res.end();
        }
    })

});

server.listen(8080);
console.log('Inicie mi servidor');