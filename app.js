'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const routes = require('./rutas')

const app = express()

// Settings

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use('/api', routes)

module.exports = app