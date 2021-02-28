const express = require('express')
const router = express.Router()

const Controller = require('../../../controllers/api/measure-controller')
const routing = require('../routing')(new Controller('measures'))
const schema = require('../../../database/schemas/measure.json')
const Schema = require('../../../middlewares/schema')(schema)
const JWT = require('../../../middlewares/jwt')
const route = 'measures'

router
	.get(`/${route}`, [JWT.isAuth], routing.all)
	.get(`/${route}/list`, [JWT.isAuth], routing.list)
	.get(`/${route}/:id`, [JWT.isAuth], routing.one)
	.post(`/${route}`, [JWT.isAuth, Schema.cleaner, Schema.validate], routing.create)
	.put(`/${route}/:id`, [JWT.isAuth, Schema.cleaner, Schema.validate], routing.update)
	.delete(`/${route}/:id`, [JWT.isAuth], routing.delete)

module.exports = router
