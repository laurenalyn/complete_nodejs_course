console.log(`Starting notes.js`);

let addNote = (title, body) => {
    console.log('Adding Note', title, body);
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
