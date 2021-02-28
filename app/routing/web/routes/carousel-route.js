const express = require('express')
const router = express.Router()

const Controller = require('../../../controllers/api/carousel-controller')
const routing = require('../../api/routing')(new Controller('carousel'))
const schema = require('../../../database/schemas/carousel.json')
const Schema = require('../../../middlewares/schema')(schema)
const route = 'carousels'

router.get(`/${route}`, routing.all)

module.exports = router
