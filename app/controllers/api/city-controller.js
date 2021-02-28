/**
 * @name CityController
 * @type Class
 * @description Controlador encargado de la funcionalidad de ciudades
 * @author Jaime Castrillón
 */

const DBController = require("../../base/db-controller")

class CityController extends DBController {
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
			throw error
		}
	}

	async update(fields, id) {
		try {
			return await super.update(this.table, fields, id)
		} catch (error) {
			throw error
		}
	}

	async delete(id) {
		try {
			return await super.delete(this.table, id)
		} catch (error) {
			throw error
		}
	}

	async one(id) {
		try {
			const fields = ["id", "name", "dane", "type", "cityId", "status"]
			return await super.one(this.table, id, fields)
		} catch (error) {
			throw error
		}
	}

	async all() {
		try {
			const fields = ["id", "name", "dane", "type", "cityId", "status"]
			const order = ["id"]
			return await super.all(this.table, fields, null, order)
		} catch (error) {
			throw error
		}
	}

	async list() {
		try {
			const fields = ["id", "name", "imageUrl", "status"]
			const order = ["name"]
			return await super.all(this.table, fields, null, order)
		} catch (error) {
			throw error
		}
	}
}

module.exports = CityController
