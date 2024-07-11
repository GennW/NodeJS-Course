// const exportedObject = require('./multiplie-exports');
const { myName, myHobbies, myDate} = require('./multiplie-exports');
const greeting = require('./single-exports');


console.log(myName, myHobbies, myDate);
greeting(myName)