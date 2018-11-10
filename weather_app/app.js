// const yargs = require('yargs');
// const geocode = require('./geocode/geocode');

// const argv = yargs.options({
//     a: {
//         demand: true,
//         alias: 'address',
//         describe: 'address to fetch weather for',
//         string: true
//     }
// })
// .help()
// .alias('help', 'h')
// .argv;

// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//     if (errorMessage) {
//         console.log(errorMessage);
//     } else {
//         console.log(JSON.stringify(results, undefined, 2));
//     }
// });


const request = require('request');

request({
    url: `https://api.darksky.net/forecast/c9213cc8e4c30524bdeafc591714875c/42.3601,-71.0589`,
    json: true
}, (error, response, body) => {
    if (!error && response.statusCode === 200) {
        console.log('The current temperature is: ' + body.currently.temperature);
    } else {
        console.log('Unable to fetch weather.');
    }
});