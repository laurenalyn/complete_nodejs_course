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
let command = argv._[0];
console.log('Command: ', command);
console.log('yargs', argv);

// Checks if the command passed is equal to the following: 
if (command === 'add') {
    notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    notes.getNote(argv.title);
} else if (command === 'remove') {
    notes.removeNote(argv.title);
} else {
    console.log('Command not recgonized');
}