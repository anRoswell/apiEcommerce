// Configuración del servidor NodeJS

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
const fileUpload = require('express-fileupload')
const compression = require('compression')
const path = require('path')

const app = express()

app.use(helmet())
app.use(
	cors({
		exposedHeaders: ['Authorization'],
	}),
)
app.use(compression())
app.use(fileUpload({ limits: { fileSize: 2 * 1024 * 1024 } }))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ extended: false }))

const publicPath = path.resolve(__dirname, '..', 'public')
app.use(express.static(publicPath))

global.publicPath = publicPath

app.disable('x-powered-by')

app.use((error, req, res, next) => {
	if (error) {
		res.status(422).json({
			type: 'error',
			message: 'request error',
		})
	} else {
		next()
	}
})

app.get('/', (req, res) => {
	res.status(403).json({
		type: 'error',
		message: 'error home',
	})
})

const apiRoutes = require('./routing/api')
app.use('/api/v1.0/', apiRoutes)

const webRoutes = require('./routing/web')
app.use('/web/v1.0/', webRoutes)

// Nuevas rutas de la API
const routes = require('./routes')
app.use('/api/v1.1/', routes)

app.all('*', (req, res) => {
	res.status(403).json({
		type: 'error',
		message: 'error ruta',
	})
})

module.exports = app
