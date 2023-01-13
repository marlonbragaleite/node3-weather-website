const path = require('path')
const express = require('express')
const hbs = require('hbs')

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()

// Setup path directories for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup Handlebars engine and views directory
app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) =>{
    res.render('index', {
        title: 'Weather',
        name: 'Marlon Leite',
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Marlon Leite',
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        helpText: 'This is the help text',
        name: 'Marlon Leite',
    })
})

app.get ('/weather', (req, res)=>{
    if (!req.query.address) {
        return res.send({error: 'No address was given!'});
    }

    geocode(req.query.address, (error, {longitude, latitude, location} = {}) => {
        if (error) {
            return res.send({error})
        }

        forecast(longitude, latitude, (error, forecastData) => {
            if (error) {
                return res.send({error})
            }

            res.send({
                forecast:forecastData,
                location,
                address: req.query.address
            })

        })

    })
})

app.get('/products' , (req, res) => {
    if (!req.query.search) {
        return res.send({erro: 'you must provide a search term!'});
    }
    
    res.send({
        products: [],
    });
})

app.get('/help/*', (req, res) => {
    res.status(404).render('404', {
        title: '404 Error',
        errorMessage: 'Help article not found.',
        name: 'Marlon Leite',
    })
})

app.get('*', (req, res) => {
    res.status(404).render('404', {
        title: '404 Error',
        errorMessage: 'Page not found.',
        name: 'Marlon Leite',
    })
})


app.listen(3000, () => {
    console.log('Server started')
})
