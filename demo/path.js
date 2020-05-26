const path = require('path');

console.log(' Имя файла => ', path.basename(__filename));
console.log(' Имя директории => ', path.dirname(__filename));
console.log(' Расширение файла => ', path.extname(__filename));
console.log(' Parse => ', path.parse(__filename));
console.log( ' переходим в файл index в папке server => ',path.join(__dirname, 'server', 'index.html'));