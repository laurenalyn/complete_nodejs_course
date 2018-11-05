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
// console.log('yargs', argv);

// Checks if the command passed is equal to the following: 
if (command === 'add') {
    let note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('note created');
        notes.logNote(note);
    } else {
        console.log('error: note title already taken select a new title');
    }
} else if (command === 'list') {
    notes.getAll();

} else if (command === 'read') {
    let note = notes.getNote(argv.title);
    if (note) {
        console.log('note found');
        notes.logNote(note);
    } else {
        console.log('error: note was not found');
    }
    
} else if (command === 'remove') {
    let noteRemoved = notes.removeNote(argv.title); // this will be either true or false
    // if the title was removed (true) we print truthy statement (note was removed) if false we print
    //falsey(note not found) 
    let message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);

} else {
    console.log('Command not recgonized');
}