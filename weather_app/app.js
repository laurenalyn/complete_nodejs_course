const request = require('request');
const yargs = require('yargs');

const argv = yargs.options({
    a: {
        demand: true,
        alias: 'address',
        describe: 'address to fetch weather for',
        string: true
    }
})
.help()
.alias('help', 'h')
.argv;

let encodeAddress = encodeURIComponent(argv.a);
let decodeAddress = decodeURIComponent(argv.a)

request({
    url: `http://www.mapquestapi.com/geocoding/v1/address?key=yBhtlHjM1bPrsZdpmAvGlqoG7mrW4Vyw&location=${encodeAddress}&fbclid=IwAR3KoGjr_3fe4JB0XJnj9BdVztH5Envd05EQVxvwQcQLtdkYcjo0t2g55Yo`,
    json: true
}, (error, response, body) => {
    if (error) {
        // will run if error exists
        console.log('Unable to connect to Google servers.');
    } else if (body.results[0].locations[0].geocodeQualityCode !== 'P1AAA') {
        console.log('Unable to find that address');
    } else if (body.results[0].locations[0].geocodeQualityCode === 'P1AAA'){

    // console.log(JSON.stringify(body, undefined, 2));
    console.log(`Address: ${JSON.stringify(body.results[0].providedLocation.location)}`);
    console.log(`Latitude: ${JSON.stringify(body.results[0].locations[0].latLng.lat)}`);
    console.log(`Longitude: ${JSON.stringify(body.results[0].locations[0].latLng.lng)}`);
    }
});