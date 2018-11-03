console.log('starting app');

const fs = require('fs');
const os = require('os');

var user = os.userInfo();
// console.log(user);
fs.appendFileSync('greetings.txt', `Hello ${user.username}!`);
// you can also write fs.appendFile('greetings.txt', 'Hello world!', function(err) {
//     if (err){
//         console.log('error');
//     }
// });
