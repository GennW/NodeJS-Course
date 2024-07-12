const { myName, myHobbies } = require('./multiplie-exports');

const myFriendsName = 'Alice';

module.exports.myName = myName;
module.exports.myFriendsName = myFriendsName;
module.exports.myBestHobbies = myHobbies;
