const express = require('express')
const router = express.Router()

const Controller = require('../../../controllers/api/product-controller')
const routing = require('../routing')(new Controller('products'))
const { ProductController } = require('../../../controllers/api/product.controller')
const Ctrl = new ProductController()
const schema = require('../../../database/schemas/product.json')
const Schema = require('../../../middlewares/schema')(schema)
const JWT = require('../../../middlewares/jwt')
const route = 'products'

router
	.get(`/${route}`, [JWT.isAuth], routing.all)
	.get(`/${route}/list`, routing.list)
	.get(`/${route}/promocion`, Ctrl.promotion)
	// .get(`/${route}/novedades`, [JWT.isAuth], routing.novedades)
	.get(`/${route}/:id`, [JWT.isAuth], routing.one)
	.post(`/${route}`, [JWT.isAuth, Schema.cleaner, Schema.validate], routing.create)
	.put(`/${route}/:id`, [JWT.isAuth, Schema.cleaner, Schema.validate], routing.update)
	.delete(`/${route}/:id`, [JWT.isAuth], routing.delete)

module.exports = router
