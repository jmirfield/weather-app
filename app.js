const request = require('request')
const forecast = require('./utils/forecast.js')

//forecast(key, lat, long, cb)
forecast(process.env.WEATHER_SECRET, 42.2848007,-71.4145674, (error,response) => {
    if(error)console.log(error)
    else {
        console.log(response)
    }
})