const express = require('express')
const router = express.Router()

const Controller = require('../../../controllers/api/user-controller')
const routing = require('../routing')(new Controller('users'))
const schema = require('../../../database/schemas/user.json')
const Schema = require('../../../middlewares/schema')(schema)
const route = 'users'

router
	.get(`/${route}`, routing.all)
	.get(`/${route}/list`, routing.list)
	.get(`/${route}/:id`, routing.one)
	.post(`/${route}`, routing.create)
	.put(`/${route}/:id`, [Schema.cleaner, Schema.validate], routing.update)
	.delete(`/${route}/:id`, routing.delete)

module.exports = router
