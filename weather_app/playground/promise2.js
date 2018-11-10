const  request = require('request');

var geocodeAddress = (address) => {
    return new Promise ((resolve, reject) => {
        let encodeAddress = encodeURIComponent(address);
        //let decodeAddress = decodeURIComponent(address);

        request({
            url: `http://www.mapquestapi.com/geocoding/v1/address?key=yBhtlHjM1bPrsZdpmAvGlqoG7mrW4Vyw&location=${encodeAddress}&fbclid=IwAR3KoGjr_3fe4JB0XJnj9BdVztH5Envd05EQVxvwQcQLtdkYcjo0t2g55Yo`,
            json: true
        }, (error, response, body) => {
            // console.log(encodeAddress);
            if (error) {
                reject('Unable to connect to Google servers.')
            } else if (body.results[0].locations[0].geocodeQualityCode !== 'P1AAA') {
                reject('Unable to find that address');
            } else if (body.results[0].locations[0].geocodeQualityCode === 'P1AAA'){
                resolve({
                    address: body.results[0].providedLocation.location,
                    latitude: body.results[0].locations[0].latLng.lat,
                    longitude: body.results[0].locations[0].latLng.lng
                });
            }
        });
    })
};

geocodeAddress('761 Broadway Newark NJ').then((location)=> {
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
    console.log(errorMessage);
}); 