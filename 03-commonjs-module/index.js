// const exportedObject = require('./multiplie-exports');
const { myName, myHobbies, myDate } = require('./multiplie-exports');
const { myName: myOtherName, myFriendsName,  myBestHobbies} = require('./export-and-import');
const greeting = require('./my-modules/single-exports');

myBestHobbies.push('skiing11');

console.log(myName, myHobbies, myDate);
greeting(myName);




console.log(myOtherName);
console.log(myFriendsName);