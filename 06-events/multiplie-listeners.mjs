// Импортируем класс EventEmitter из модуля 'events'
import { EventEmitter } from 'events';

// Создаем экземпляр EventEmitter
const myEmitter = new EventEmitter();

// Добавляем два обработчика события 'myEvent'
myEmitter.on('myEvent', () => {
    console.log('First event listener'); // Выводим сообщение в консоль
});

myEmitter.on('myEvent', () => {
    console.log('Second event listener'); // Выводим сообщение в консоль
});

// Устанавливаем максимальное количество слушателей на 25
myEmitter.setMaxListeners(25);

// Выводим текущее значение максимального количества слушателей
console.log(myEmitter.getMaxListeners())

// Через 1 секунду генерируем событие 'myEvent'
setTimeout(() => myEmitter.emit('myEvent'), 1000)
