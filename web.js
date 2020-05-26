const http = require('http');
const fs = require('fs'); // для работы с файлами
const path = require('path'); // для работы с путями


const server = http.createServer((req, res) => {

    // console.log(req.url)
    // if (req.url === '/') {
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => { //читаем путь к файлу, ловим ошибку
    //         if (err) {
    //             throw err
    //         }
    //         res.writeHead(200, {
    //             'Content-Type': 'text/html'
    //         })
    //         res.end(data)
    //     })
    // } else  if (req.url === '/contact') {
    //     fs.readFile(path.join(__dirname, 'public', 'contact.html'), (err, data) => { //читаем путь к файлу, ловим ошибку
    //         if (err) {
    //             throw err
    //         }
    //         res.writeHead(200, {
    //             'Content-Type': 'text/html'
    //         })
    //         res.end(data)
    //     })
    // }


    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url) // путь к файлу
    const exName = path.extname(filePath); // расширение файла
    console.log("this is exName =>  ", exName)
    console.log("this is filePath =>  ",filePath)
    let contentType = 'text/html'

    switch (exName ) {
        case '.css':
            contentType = "text/css"
            break
        case '.js':
            contentType = "text/javascript"
            break
        default:
            contentType = "text/html"

    }
    if(!exName) {
        filePath += '.html'
    }



    fs.readFile(filePath, (err, data) => {
        if ( err ) {
            fs.readFile(path.join(__dirname, 'public', 'error.html'), (err, er) => {
                if (err) {
                    res.writehead(500)
                    res.end('Error')
                } else {
                    res.writeHead( 200, { 'Content-Type': 'text/html' } )
                    res.end(er)
                }

            })
        } else {
            res.writeHead( 200, { 'Content-Type': contentType } )
            res.end(data) // закрываем вызов
        }




    })






})
server.listen(3010, () => {
    console.log('server has been started...')
})

