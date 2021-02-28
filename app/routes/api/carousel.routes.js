const express = require('express')
const router = express.Router()

const { CarouselController } = require('../../controllers/api/carousel.controller')
const Ctrl = new CarouselController()
const schema = require('../../database/schemas/carousel.json')
const Schema = require('../../middlewares/schema')(schema)
const JWT = require('../../middlewares/jwt')
const route = 'carousel'

router
    .get(`/${route}`, [JWT.isAuth], Ctrl.all)
    .get(`/${route}/:list`, [JWT.isAuth], Ctrl.list)
    .get(`/${route}/:id`, [JWT.isAuth], Ctrl.one)
    .post(`/${route}`, [JWT.isAuth, Schema.cleaner, Schema.validate], Ctrl.create)
    .put(`/${route}/:id`, [JWT.isAuth, Schema.cleaner, Schema.validate], Ctrl.update)
    .delete(`/${route}/:id`, [JWT.isAuth], Ctrl.delete)

module.exports = router