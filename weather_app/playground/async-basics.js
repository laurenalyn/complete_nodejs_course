console.log('starting app');  //we see this first

setTimeout( () => {
    console.log('inside of callback'); // we see this fourth
}, 2000);

setTimeout( () => {
    console.log('second callback'); // we see this third - it was stil in "timeout"
}, 0); 

console.log('finishing app'); // we see this second
