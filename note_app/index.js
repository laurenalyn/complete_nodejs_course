console.log('Starting index.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');  //3rd party module
const notes = require('./notes.js');

console.log(_.isString(true)); //false
console.log(_.isString('Lauren'));  //true

let filteredArray = _.uniq(['lauren', 1, 'lauren']);
console.log(filteredArray);  //['lauren', 1]


