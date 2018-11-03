console.log('Starting index.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

let res = notes.addNote();
console.log(res);

let sum = notes.add(2, 2);
console.log(sum); //4
// let user = os.userInfo();

// fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);

