import { EventEmitter } from 'events';

const myEmitter = new EventEmitter();
const timeoutListenerFn = (secondsQty) => {
    console.log('Timeout event!' + secondsQty);
};

myEmitter.on('timeout', timeoutListenerFn);

setTimeout(() => {
    myEmitter.emit('timeout', 1);
}, 1000);

setTimeout(() => {
    myEmitter.emit('timeout', 2);
}, 2000);
setTimeout(() => {
    myEmitter.emit('timeout', 2);
}, 4000);

setTimeout(() => myEmitter.off('timeout', timeoutListenerFn), 3000);
