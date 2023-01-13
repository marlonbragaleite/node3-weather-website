// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then((data) => {
//         console.log(data)
//     })
// })

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('p#message-1')
const messageTwo = document.querySelector('p#message-2')

// messageOne.textContent = ''

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('/weather?address='+location).then((response) => {
        
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = 
                    data.forecast.temperature + ' °C - ' +
                    data.forecast.description
                    if (data.forecast.cloudcover) 
                        messageTwo.textContent +=' (' + data.forecast.cloudcover + '% cloud cover).'
                    if (data.forecast.precipitation !== undefined)
                        messageTwo.textContent += ' Rain volume: ' + data.forecast.precipitation + 'mm.'
                    if (data.forecast.humidity !== undefined)
                        messageTwo.textContent += ' Humidity: ' + data.forecast.humidity + '%.'
                        
                    if (data.forecast.daily) {
                        data.forecast.daily.forEach(e => {
                            messageTwo.textContent += '\r\n' + e.day + ' - ' +
                            e.description + '. ' +
                            'Min: ' + e.min + '°C, ' +
                            'Max: ' + e.max + '°C. ' +
                            'Rain: ' + e.rain_mm + 'mm for ' +
                            e.rain_h + ' hours '
                        })
                    }
                     
                console.log(data.forecast)
            }
        })
    })
})