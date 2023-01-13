const request = require('request')
const wmo = require('./wmo')

const forecast = (longitude, latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=b541d12b551da1947c923a09aa3e73c5&query='+encodeURIComponent(latitude)+','+encodeURIComponent(longitude)+'&unit=m'
    
    request({url, json: true}, (error, {body}) => {
        if (error) {
            console.log(error)
            callback('Unable to connect to weather services.')
        } else if (body.error) {
            console.log(body)
            callback('Unable to find location')
        } else {
            console.log(body)
            callback(undefined, {
                temperature: body.current.temperature,
                description: body.current.weather_descriptions[0],
                precipitation: body.current.precip,
                humidity: body.current.humidity,
                cloudcover: body.current.cloudcover,
                pressure: body.current.pressure
            })
        }
    })
}

const forecast2 = (longitude, latitude, callback) => {
    const url = 'https://api.open-meteo.com/v1/forecast?latitude='+encodeURIComponent(latitude)+'&longitude='+encodeURIComponent(longitude)+'&timezone=auto&daily=weathercode,temperature_2m_min,temperature_2m_max,precipitation_sum,precipitation_hours&current_weather=true'
    
    request({url, json: true}, (error, {body}) => {
        if (error) {
            console.log(error)
            callback('Unable to connect to weather services.')
        } else if (body.error) {
            console.log(body)
            callback('Unable to find location')
        } else {
            console.log(body)
            callback(undefined, {
                temperature: body.current_weather.temperature,
                description: wmo(body.current_weather.weathercode),
                daily: [
                    {
                        day: body.daily.time[0],
                        description: wmo(body.daily.weathercode[0]),
                        min: body.daily.temperature_2m_min[0],
                        max: body.daily.temperature_2m_max[0],
                        rain_mm: body.daily.precipitation_sum[0],
                        rain_h: body.daily.precipitation_hours[0]
                    },
                    {
                        day: body.daily.time[1],
                        description: wmo(body.daily.weathercode[1]),
                        min: body.daily.temperature_2m_min[1],
                        max: body.daily.temperature_2m_max[1],
                        rain_mm: body.daily.precipitation_sum[1],
                        rain_h: body.daily.precipitation_hours[1]
                    },
                    {
                        day: body.daily.time[2],
                        description: wmo(body.daily.weathercode[2]),
                        min: body.daily.temperature_2m_min[2],
                        max: body.daily.temperature_2m_max[2],
                        rain_mm: body.daily.precipitation_sum[2],
                        rain_h: body.daily.precipitation_hours[2]
                    },
                    {
                        day: body.daily.time[3],
                        description: wmo(body.daily.weathercode[3]),
                        min: body.daily.temperature_2m_min[3],
                        max: body.daily.temperature_2m_max[3],
                        rain_mm: body.daily.precipitation_sum[3],
                        rain_h: body.daily.precipitation_hours[3]
                    },
                    {
                        day: body.daily.time[4],
                        description: wmo(body.daily.weathercode[4]),
                        min: body.daily.temperature_2m_min[4],
                        max: body.daily.temperature_2m_max[4],
                        rain_mm: body.daily.precipitation_sum[4],
                        rain_h: body.daily.precipitation_hours[4]
                    },
                    {
                        day: body.daily.time[5],
                        description: wmo(body.daily.weathercode[5]),
                        min: body.daily.temperature_2m_min[5],
                        max: body.daily.temperature_2m_max[5],
                        rain_mm: body.daily.precipitation_sum[5],
                        rain_h: body.daily.precipitation_hours[5]
                    },
                    {
                        day: body.daily.time[6],
                        description: wmo(body.daily.weathercode[6]),
                        min: body.daily.temperature_2m_min[6],
                        max: body.daily.temperature_2m_max[6],
                        rain_mm: body.daily.precipitation_sum[6],
                        rain_h: body.daily.precipitation_hours[6]
                    },
                ],
            })
        }
    })
}

module.exports = {forecast, forecast2}