// starts notes.js
console.log(`Starting notes.js`);
// imports node module
const fs = require('fs');

const fetchNotes = () => {
    // We add the try catch for error handeling. If the file does not exsist yet then it will move on to the line where we push the note
    // into our notes object. The next step would be to run fs.writeFileSync which creates the notes-data.json file and we pass the notes
    // object to the file and it gets converted to json prior to being written to the file. 
    // If the file already exsists then we go into our try/catch statement and read our current file notes-data.json
    // The current json string insdie that file gets assigned to noteString. From there we parse it back into a javascript object
    // And then we push that object into our notes array and proceed to fs.writeFileSync which will add our whole array with the new note 
    // added and converted back into json
    try {
        let notesString = fs.readFileSync('notes-data.json');
       return notes = JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};

const saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

// function expression with an anonymous function that accepts two arguments title and body
let addNote = (title, body) => {
    // saves an empty array and an object inside our function
    let notes = fetchNotes();
    let note = {
        title,
        body,
    };

    // below variable (duplicateNotes) will store an array with all notes that already exist inside of the notes array that have the title of the note that is trying to be created
    // let duplicateNotes = notes.filter((note) => {
    //     return note.title === title;
    // });

    // short hand for (above) arrow syntax body since we are only returning one line of code to execure
    let duplicateNotes = notes.filter((note) => note.title === title);

    // if the length of our duplicateNotes === 0 meaning we have not yet duplicated the title name then we want to go ahead and execute our if statements - 
    // otherwise if we have duplicated the title name then the data will not be pushed
    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    } 
};

let getAll = () => {
    console.log('Getting all notes');
};

let getNote = (title) => {
    console.log('Getting Note', title);
};

let removeNote = (title) => {
    let notes = fetchNotes();
    // filters notes and removes the note with the title that we passed
    let filteredNotes = notes.filter((note) => note.title !== title);
    // saves the file - minus the note removed
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;
};


module.exports = {
    // short hand in ES6 is to just write addNote instead of    addNote: addNote    since the key&value are the same
    addNote,
    getAll, 
    getNote,
    removeNote
};

