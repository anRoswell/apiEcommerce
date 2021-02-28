const express = require('express')
const router = express.Router()

const Controller = require('../../../controllers/api/product-controller')
const routing = require('../routing')(new Controller('products'))
const schema = require('../../../database/schemas/product.json')
const Schema = require('../../../middlewares/schema')(schema)
const JWT = require('../../../middlewares/jwt')
const route = 'products'

router
	.get(`/${route}`, [JWT.isAuth], routing.all)
	.get(`/${route}/list`, [JWT.isAuth], routing.list)
	.get(`/${route}/:id`, [JWT.isAuth], routing.one)
	// .get(`/${route}/promotion`, [JWT.isAuth], routing.promotion)
	// .get(`/${route}/newproduct`, [JWT.isAuth, Schema.cleaner, Schema.validate], routing.newProduct)
	.put(`/${route}/:id`, [JWT.isAuth, Schema.cleaner, Schema.validate], routing.update)
	.delete(`/${route}/:id`, [JWT.isAuth], routing.delete)

module.exports = router
