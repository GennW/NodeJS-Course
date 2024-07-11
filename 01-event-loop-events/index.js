//https://rutube.ru/video/e88b729ca23a5c95b52e68e543c156b0/?playlist=333625&playlistPage=2
// Node.js - 032 - Цикл событий

const fs = require('fs');
const dns = require('dns');

function info(text) {
   return console.log(text, performance.now().toFixed(2));
}

console.log('Programm start');

//timeouts
setTimeout(() =>  info('Timeout-1'));
setTimeout(() => { 
    process.nextTick(() => info('NextTick 2'));
    info('Timeout-2');
}, 100);

// intervals
let intervalCount = 0;
const intervalId = setInterval(() => {
    info(`Interval ${intervalCount += 1}`);
    if (intervalCount === 2) {
    clearInterval(intervalId)
    }
}, 70);

//Close events
fs.writeFile('./test.txt', 'Hello Node.js!', () => info('File wtitten'));

//promises
Promise.resolve().then(()=> info('Promise 1'));

//nextTick
process.nextTick(() => info('NextTick 1')); // самый высокий приоритет

//setImmediate (Check)
setImmediate(() => info('Immediate 1'));


// I/O Events
dns.lookup('localhost', (err, address, family) => {
   info('DNS 1 localhost', address, family);
    Promise.resolve().then(()=> info('Promise 2'));
    process.nextTick(() => info('NextTick 3'));
})

console.log('Programm end');


//37