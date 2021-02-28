/**
 * @name FeaturesController
 * @type Class
 * @description Controlador encargado de la funcionalidad de caracteristicas
 * @author Alfonso Navarro
 */

const DBController = require('../../base/db-controller')
const Response = require('../../base/response')
const Message = require('../../messages/message')
const log4js = require('../../base/log4js')()

class FeaturesController extends DBController {
	constructor(table) {
		super()
		this.table = table
	}

	/**
	 * @method create
	 * @param fields Campos para la creación de feature
	 * @returns Promise datos de la acción realizada
	 */

	async create(fields) {
		try {
			return await super.create(this.table, fields)
		} catch (error) {
			log4js.error(`[action: ProfileController create][msg: ${error.message}][file:${__filename}]`)
			throw Response.error(Message('CREATE_ERROR'), 400)
		}
	}

	async update(fields, id) {
		try {
			return await super.update(this.table, fields, id)
		} catch (error) {
			log4js.error(`[action: ProfileController create][msg: ${error.message}][file:${__filename}]`)
			throw Response.error(Message('UPDATE_ERROR'), 400)
		}
	}

	async delete(id) {
		try {
			return await super.delete(this.table, id)
		} catch (error) {
			log4js.error(`[action: ProfileController create][msg: ${error.message}][file:${__filename}]`)
			throw Response.error(Message('DELETE_ERROR'), 400)
		}
	}

	async one(id) {
		try {
			const fields = ['id', 'name', 'values', 'status']
			const feature = await super.one(this.table, id, fields)
			feature.data.values = JSON.parse(feature.data.values)
			return feature
		} catch (error) {
			log4js.error(`[action: ProfileController create][msg: ${error.message}][file:${__filename}]`)
			throw Response.error(Message('DATA_ERROR'), 400)
		}
	}

	async all() {
		try {
			const fields = ['id', 'name', 'values', 'status']
			const order = ['id']
			const features = await super.all(this.table, fields, null, order)
			features.data.map((f) => {
				f.values = JSON.parse(f.values)
			})
			return features
		} catch (error) {
			log4js.error(`[action: ProfileController create][msg: ${error.message}][file:${__filename}]`)
			throw Response.error(Message('DATA_ERROR'), 400)
		}
	}

	async list() {
		try {
			const fields = ['id', 'name', 'status']
			const order = ['name']
			return await super.all(this.table, fields, null, order)
		} catch (error) {
			log4js.error(`[action: ProfileController create][msg: ${error.message}][file:${__filename}]`)
			throw Response.error(Message('DATA_ERROR'), 400)
		}
	}
}

module.exports = FeaturesController
