// starts notes.js
console.log(`Starting notes.js`);
// imports node module
const fs = require('fs');

// function expression with an anonymous function that accepts two arguments title and body
let addNote = (title, body) => {
    // saves an empty array and an object inside our function
    let notes = [];
    let note = {
        title,
        body
    };
    
    // We add the try catch for error handeling. If the file does not exsist yet then it will move on to the line where we push the note
    // into our notes object. The next step would be to run fs.writeFileSync which creates the notes-data.json file and we pass the notes
    // object to the file and it gets converted to json prior to being written to the file. 
    // If the file already exsists then we go into our try/catch statement and read our current file notes-data.json
    // The current json string insdie that file gets assigned to noteString. From there we parse it back into a javascript object
    // And then we push that object into our notes array and proceed to fs.writeFileSync which will add our whole array with the new note 
    // added and converted back into json
    try {
        let notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
    } catch (e) {

    }

    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

let getAll = () => {
    console.log('Getting all notes');
};

let getNote = (title) => {
    console.log('Getting Note', title);
};

let removeNote = (title) => {
    console.log('Removing Note', title);
};


module.exports = {
    // short hand in ES6 is to just write addNote instead of    addNote: addNote    since the key&value are the same
    addNote,
    getAll, 
    getNote,
    removeNote
};
