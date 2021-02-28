const express = require('express')
const router = express.Router()

const Controller = require('../../../controllers/api/brand-controller')
const routing = require('../routing')(new Controller('brands'))
const schema = require('../../../database/schemas/brand.json')
const Schema = require('../../../middlewares/schema')(schema)
const JWT = require('../../../middlewares/jwt')

router
    .get('/brands', [JWT.isAuth], routing.all)
    .get('/brands/list', [JWT.isAuth], routing.list)
    .get('/brands/:id', [JWT.isAuth], routing.one)
    .post('/brands', [JWT.isAuth, Schema.cleaner, Schema.validate], routing.create)
    .put('/brands/:id', [JWT.isAuth, Schema.cleaner, Schema.validate], routing.update)
    .delete('/brands/:id', [JWT.isAuth], routing.delete)

module.exports = router