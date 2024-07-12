import path from 'path';
// 086 https://rutube.ru/video/7c2cc968be7b7eb0f5ee2b5ec6ab8415/?playlist=333625
// Абсолютный путь к файлу
const filePath = '/home/programmer/Dropbox/Node/Udemy/Node.js-2023/07-path/index.mjs';

// Относительный путь к файлу
const textFile = './info.txt';

// Проверяет, является ли путь абсолютным
console.log(path.isAbsolute(filePath)); // true
console.log(path.isAbsolute(textFile)); // false

// Получает имя файла из пути
console.log(path.basename(filePath)); // index.mjs

// Разрешает относительный путь до абсолютного
console.log(path.resolve(textFile)); // /home/programmer/Dropbox/Node/Udemy/Node.js-2023/07-path/info.txt

// Получает расширение файла
console.log(path.extname(filePath)); // .mjs

// Получает директорию из пути
console.log(path.dirname(filePath)); // /home/programmer/Dropbox/Node/Udemy/Node.js-2023/07-path

// Нормализует путь, убирая лишние слэши и точки
console.log(path.normalize('/home//programmer/./Dropbox/Node/Udemy/Node.js-2023/07-path//')); // /home/programmer/Dropbox/Node/Udemy/Node.js-2023/07-path

// Объединяет несколько частей пути в один путь
console.log(path.join('/home', 'programmer', 'Dropbox', 'Node', 'Udemy', 'Node.js-2023', '07-path')); // /home/programmer/Dropbox/Node/Udemy/Node.js-2023/07-path

// Разбирает путь на составные части
console.log(path.parse(filePath));
/*
{
root: '/',
dir: '/home/programmer/Dropbox/Node/Udemy/Node.js-2023/07-path',
base: 'index.mjs',
ext: '.mjs',
name: 'index'
}
*/