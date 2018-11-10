const request = require('request');

getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/c9213cc8e4c30524bdeafc591714875c/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        } else {
            callback('Unable to fetch weather.');
        }
    });
}

module.exports.getWeather = getWeather;
