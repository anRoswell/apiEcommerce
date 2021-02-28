const express = require('express')
const router = express.Router()

const Controller = require('../../../controllers/api/category-controller')
const routing = require('../routing')(new Controller('categories'))
const route = 'categories'

router.get(`/${route}/list`, routing.list)

module.exports = router
