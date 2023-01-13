const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=b541d12b551da1947c923a09aa3e73c5&query='+encodeURIComponent(latitude)+','+encodeURIComponent(longitude)+'&unit=m'
    
    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather services.')
        } else if (body.error) {
            console.log(body)
            callback('Unable to find location')
        } else {
            callback(undefined, {
                temperature: body.current.temperature,
                feelslike: body.current.feelslike,
                description: body.current.weather_descriptions[0]
            })
        }
    })
}

module.exports = forecast