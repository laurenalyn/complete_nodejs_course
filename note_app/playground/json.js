let obj = {
    name: 'Lauren',
};
let stringObj = JSON.stringify(obj); //converts js object into a json string
console.log(typeof stringObj);
console.log(stringObj);

let personString = '{"name": "Andrew", "age": 27}';
let person = JSON.parse(personString); // converts json string back into a js object
console.log(typeof person);
console.log(person);