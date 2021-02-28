/**
 * @name UserController
 * @type Class
 * @description Controlador encargado de la funcionalidad de usuarios
 * @author Jaime Castrillón
 **/

const bcrypt = require('bcryptjs')
const UUID = require('../../utils/uuid')
const DBController = require('../../base/db-controller')
const Response = require('../../base/response')
const Message = require('../../messages/message')
const log4js = require('../../base/log4js')()

class UserController extends DBController {
	constructor(table) {
		super()
		this.table = table
	}

	/**
	 * @method create
	 * @param fields Campos para la creación de usuarios
	 * @returns Promise datos de la acción realizada
	 */
	async create(fields) {
		try {
			fields.password = bcrypt.hashSync(fields.password, 10)
			fields.token = UUID.get()
			fields.validation = 0
			fields.lastDateLogin = new Date()
			delete fields['confirmPassword']
			return await super.create(this.table, fields)
		} catch (error) {
			log4js.error(`[action: UserController create][msg: ${error.message}][file:${__filename}]`)
			throw Response.error(Message('CREATE_ERROR'), 400)
		}
	}

	async update(fields, id) {
		try {
			delete fields.password
			return await super.update(this.table, fields, id)
		} catch (error) {
			log4js.error(`[action: UserController update][msg: ${error.message}][file:${__filename}]`)
			throw Response.error(Message('UPDATE_ERROR'), 400)
		}
	}

	async delete(id) {
		try {
			return await super.delete(this.table, id)
		} catch (error) {
			log4js.error(`[action: UserController delete][msg: ${error.message}][file:${__filename}]`)
			throw Response.error(Message('DELETE_ERROR'), 400)
		}
	}

	async one(id) {
		try {
			const fields = ['id', 'name']
			return await super.one(this.table, id, fields)
		} catch (error) {
			log4js.error(`[action: UserController one][msg: ${error.message}][file:${__filename}]`)
			throw Response.error(Message('DATA_ERROR'), 400)
		}
	}

	async all() {
		try {
			const fields = ['id', 'name', 'username', 'email', 'mobile', 'profileid', 'status']
			const order = ['id']
			return await super.all(this.table, fields, null, order)
		} catch (error) {
			log4js.error(`[action: UserController all][msg: ${error.message}][file:${__filename}]`)
			throw Response.error(Message('DATA_ERROR'), 400)
		}
	}

	async list() {
		try {
			const fields = ['id', 'name', 'disabled']
			const order = ['name']
			return await super.all(this.table, fields, null, order)
		} catch (error) {
			log4js.error(`[action: UserController list][msg: ${error.message}][file:${__filename}]`)
			throw Response.error(Message('DATA_ERROR'), 400)
		}
	}
}

module.exports = UserController
