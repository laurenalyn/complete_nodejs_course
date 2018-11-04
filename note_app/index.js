console.log('Starting index.js');
//built in modules
const fs = require('fs');
const os = require('os');
//3rd party module
const _ = require('lodash');
const yargs = require('yargs');
 //local module
const notes = require('./notes.js');
// console.log(_.isString(true)); //false
// console.log(_.isString('Lauren'));  //true

// _.uniq is method of the _ that eliminates duplicates within an array 
// let filteredArray = _.uniq(['Mike']);
// console.log(filteredArray); 

// Uses yargs npm to parse passed values
const argv = yargs.argv;

// Start with argv[2] & higher - argv[0] & argv[1] cannot be reassigned for new commands
// process.argv is part of the Node environment, not a 3rd party module
let command = process.argv[2];
console.log('Command: ', command);
console.log('process',process.argv);
console.log('yargs', argv);

// Checks if the command passed is equal to the following: 
if (command === 'add') {
    console.log('Adding new note');
} else if (command === 'list') {
    console.log('Listing all notes');
} else if (command === 'read') {
    console.log('Note being read');
} else if (command === 'remove') {
    console.log('Removing note');
} else {
    console.log('Command not recgonized')
}