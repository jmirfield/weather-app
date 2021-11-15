const request = require('request')

const forecast = (key, latitude, longitude, callback) => {
    const URL = `http://api.weatherstack.com/current?access_key=${key}&query=${latitude},${longitude}&units=f`
    request({ 
        url: URL,
        json: true
    }, (error, response) => {
        if(error){
            callback("Try again buddy.", undefined)
        } else if (response.body.success === false){
            console.log(response.body.error.info)
        } else {
            const data = response.body
            callback(undefined, `Location: ${data.location.name}, ${data.location.region} -- Time: ${data.location.localtime}\nTemperature: ${data.current.temperature}, but feels like: ${data.current.feelslike}`)
        }
    })
}

module.exports = forecast