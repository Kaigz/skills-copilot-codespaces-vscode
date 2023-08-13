// Create web server with Node.js

// Import modules
const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');

// Create web server
const app = http.createServer(function(request,response){

    // Get query string
    const _url = request.url;
    const queryData = url.parse(_url, true).query;
    const pathname = url.parse(_url, true).pathname;

    // Log query string
    console.log(queryData.id);

    // If query string is null
    if(pathname === '/'){

        // If query string is null
        if(queryData.id === undefined){

            // Read file
            fs.readdir('./data', function(error, filelist){

                // Log filelist
                console.log(filelist);

                // Create title
                const title = 'Welcome';
                const description = 'Hello, Node.js'

                // Create list
                let list = '<ul>';
                let i = 0;
                while(i < filelist.length){

                    // Add list
                    list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
                    i = i + 1;
                }
                
                // Close list
                list = list + '</ul>';

                // Create template
                const template = `
                <!doctype html>
                <html>
                <head>
                    <title>WEB1 - ${title}</title>
                    <meta charset="utf-8">
                </head>
                <body>
                    This is a test
                    <h1><a href="/">WEB</a></h1>
                    ${list}
                    <h2>${title}</h2>
                    <p>${description}</p>
                </body>
                </html>
                `;
