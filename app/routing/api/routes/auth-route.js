const express = require('express')
const router = express.Router()

const Controller = require('../../../controllers/api/auth-controller')
const routing = require('../routing')(new Controller())
const schema = require('../../../database/schemas/auth.json')
const Schema = require('../../../middlewares/schema')(schema)

router
  .post(`/auth/login`, [Schema.cleaner, Schema.validate], routing.auth)

module.exports = router