/**
 * @name CarouselController
 * @type Class
 * @description Controlador encargado de la funcionalidad de categorías
 * @author Jaime Castrillón
 */

const Upload = require('../../base/upload')
const DBController = require('../../base/db-controller')
const Response = require('../../base/response')
const Message = require('../../messages/message')
const log4js = require('../../base/log4js')()

class CarouselController extends DBController {
	constructor(table) {
		super()
		this.table = table
	}

	/**
	 * @method all
	 * @returns Promise datos de la consulta realizada
	 */
	async all() {
		try {
			const fields = ['description', 'title', 'url', 'active', 'slug']
			const order = ['id']
			const carousels = await super.all(this.table, fields, null, order)
			return carousels
		} catch (error) {
			console.log(error)
			log4js.error(`[action: CarouselController all][msg: ${error.message}][file:${__filename}]`)
			throw Response.error(Message('DATA_ERROR'))
		}
	}
}

module.exports = CarouselController
