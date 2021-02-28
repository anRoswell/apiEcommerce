const express = require('express')
const router = express.Router()

const { CityController } = require('../../controllers/api/city.controller')
const Ctrl = new CityController()
const schema = require('../../database/schemas/city.json')
const Schema = require('../../middlewares/schema')(schema)
const JWT = require('../../middlewares/jwt')
const route = 'cities'

router
    .get(`/${route}`, [JWT.isAuth], Ctrl.all)
    .get(`/${route}/:list`, [JWT.isAuth], Ctrl.list)
    .get(`/${route}/:id`, [JWT.isAuth], Ctrl.one)
    .post(`/${route}`, [JWT.isAuth, Schema.cleaner, Schema.validate], Ctrl.create)
    .put(`/${route}/:id`, [JWT.isAuth, Schema.cleaner, Schema.validate], Ctrl.update)
    .delete(`/${route}/:id`, [JWT.isAuth], Ctrl.delete)

module.exports = router