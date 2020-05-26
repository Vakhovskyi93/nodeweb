// file system
const fs = require('fs');
const path = require('path');

// fs.mkdir() //СОЗДАНИЕ ПАПКИ
// fs.writeFile( ) //Создает и записывает информацию в файл && перезаписывает информацию в файл
// fs.appendFile( ) //  Добавляет информацию в файл


// fs.mkdir(path.join(__dirname, 'test' ), (err) => { //СОЗДАНИЕ ПАПКИ
//     if (err) {
//         throw err
//     }
//     console.log(' Папка создана')
// })
const filePath = path.join(__dirname, 'test', 'text.txt');
const filetext = " Hi"


// fs.writeFile( filePath, filetext, err => { //Слздает и записывает информацию в файл
//     if (err){
//         throw err
//     }
//     console.log('Файл создан')
// })
// fs.writeFile( filePath, "%%%%%%%%%%%%%%%", err => { // перезаписывает информацию в файл
//     if (err){
//         throw err
//     }
//     console.log('Файл создан')
// })
// fs.appendFile( filePath, "  %%%%%%%%%%%%%%% ", err => { //  Добавляет информацию в файл
//     if (err){
//         throw err
//     }
//     console.log('Файл создан')
// })

// fs.readFile(filePath, (err, content) => {
//     if (err){
//         throw err
//     }
//     //получает инф-ию в буферах = <Buffer 20 48 69 20 20 20 20 20 25 25 25 25 25 25 25 25 25 25 25 25 25 25 25 20>
//     let data = Buffer.from(content)
//
//     console.log('content !!! ', content.toString())
//
//     console.log('content  ', data.toString()) //преобразование в строку
// })
// fs.readFile(filePath, 'utf-8', (err, content) => {
//     if (err){
//         throw err
//     }
//    console.log('content  ', content) //преобразование в строку c помощью указания кодировки!!!
// })

