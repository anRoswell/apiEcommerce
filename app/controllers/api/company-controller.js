/**
 * @name CityController
 * @type Class
 * @description Controlador encargado de la funcionalidad de la tabla compañia
 * @author Alfonso Navarro
 */

const DBController = require('../../base/db-controller')
const Response = require('../../base/response')
const Message = require('../../messages/message')
const log4js = require('../../base/log4js')()

class CompnayController extends DBController {
	constructor(table) {
		super()
		this.table = table
	}

	/**
	 * @method create
	 * @param fields Campos para la creación de producto
	 * @param file Imagen para la creación de producto
	 * @returns Promise datos de la acción realizada
	 */

	async create(fields, file) {
		try {
			return await super.create(this.table, fields)
		} catch (error) {
			throw Response.error(Message('CREATE_ERROR'), 400)
		}
	}

	async update(fields, id) {
		try {
			return await super.update(this.table, fields, id)
		} catch (error) {
			throw Response.error(Message('CREATE_ERROR'), 400)
		}
	}

	async delete(id) {
		try {
			return await super.delete(this.table, id)
		} catch (error) {
			throw Response.error(Message('DELETE_ERROR'), 400)
		}
	}

	async one(id) {
		try {
			const fields = [
				'id',
				'name',
				'alias',
				'identificationTypeId',
				'identificationNumber',
				'address',
				'email',
				'phone',
				'mobile',
				'vat',
				'taxes',
				'slogan',
				'message',
				'status',
			]
			return await super.one(this.table, id, fields)
		} catch (error) {
			throw Response.error(Message('DATA_ERROR'), 400)
		}
	}

	async all() {
		try {
			const fields = [
				'id',
				'name',
				'alias',
				'identificationTypeId',
				'identificationNumber',
				'address',
				'email',
				'phone',
				'mobile',
				'vat',
				'taxes',
				'slogan',
				'message',
				'status',
			]
			const order = ['id']
			return await super.all(this.table, fields, null, order)
		} catch (error) {
			throw Response.error(Message('DATA_ERROR'), 400)
		}
	}

	async list() {
		try {
			const fields = [
				'id',
				'name',
				'alias',
				'identificationTypeId',
				'identificationNumber',
				'address',
				'email',
				'phone',
				'mobile',
				'vat',
				'taxes',
				'slogan',
				'message',
				'status',
			]
			const order = ['name']
			return await super.all(this.table, fields, null, order)
		} catch (error) {
			throw Response.error(Message('DATA_ERROR'), 400)
		}
	}
}

module.exports = CompnayController
