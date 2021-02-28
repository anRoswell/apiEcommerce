/**
 * @name CategoryController
 * @type Class
 * @description Controlador encargado de la funcionalidad de categorías
 * @author Jaime Castrillón
 */

const Upload = require('../../base/upload')
const DBController = require('../../base/db-controller')
const Response = require('../../base/response')
const Message = require('../../messages/message')
const log4js = require('../../base/log4js')()

class CategoryController extends DBController {
	constructor(table) {
		super()
		this.table = table
	}

	/**
	 * @method create
	 * @param fields Campos para la creación de categoría
	 * @param file Imagen para la creación de categoría
	 * @returns Promise datos de la acción realizada
	 */

	async create(fields, file) {
		try {
			fields.imageUrl = Upload.file(file)
			return await super.create(this.table, fields)
		} catch (error) {
			log4js.error(`[action: CategoryController create][msg: ${error.message}][file:${__filename}]`)
			throw Response.error(Message('CREATE_ERROR'))
		}
	}

	/**
	 * @method update
	 * @param fields Campos para la actualización de categoría
	 * @param id Identificador de la categoría que se va a actualizar
	 * @param file Imagen para la actualización de categoría
	 * @returns Promise datos de la acción realizada
	 */
	async update(fields, id, file) {
		try {
			if (file) {
				fields.imageUrl = Upload.file(file)
			}
			return await super.update(this.table, fields, id)
		} catch (error) {
			log4js.error(`[action: CategoryController update][msg: ${error.message}][file:${__filename}]`)
			throw Response.error(Message('UPDATE_ERROR'))
		}
	}

	/**
	 * @method delete
	 * @param id Identificador de la categoría que se va a eliminar
	 * @returns Promise datos de la acción realizada
	 */
	async delete(id) {
		try {
			return await super.delete(this.table, id)
		} catch (error) {
			log4js.error(`[action: CategoryController delete][msg: ${error.message}][file:${__filename}]`)
			throw Response.error(Message('DELETE_ERROR'))
		}
	}

	/**
	 * @method one
	 * @param id Identificador de la categoría que se va a consultar
	 * @returns Promise dato de la consulta realizada
	 */
	async one(id) {
		try {
			const fields = ['id', 'name', 'slug', 'description', 'categoryId', 'imageUrl', 'seo', 'status']
			const category = await super.one(this.table, id, fields)
			category.data.seo = JSON.parse(category.data.seo)
			return category
		} catch (error) {
			log4js.error(`[action: CategoryController one][msg: ${error.message}][file:${__filename}]`)
			throw Response.error(Message('DATA_ERROR'))
		}
	}

	/**
	 * @method all
	 * @returns Promise datos de la consulta realizada
	 */
	async all() {
		try {
			const fields = ['id', 'name', 'slug', 'description', 'categoryId', 'imageUrl', 'seo', 'status']
			const order = ['id']
			const categories = await super.all(this.table, fields, null, order)
			if (categories.data.length) {
				categories.data.map((i) => (i.seo = JSON.parse(i.seo)))
			}
			return categories
		} catch (error) {
			log4js.error(`[action: CategoryController all][msg: ${error.message}][file:${__filename}]`)
			throw Response.error(Message('DATA_ERROR'))
		}
	}

	/**
	 * @method all
	 * @returns Promise datos de la consulta realizada
	 */
	async list() {
		try {
			const fields = ['id', 'name', 'status', 'slug']
			const order = ['name']
			return await super.all(this.table, fields, null, order)
		} catch (error) {
			log4js.error(`[action: CategoryController list][msg: ${error.message}][file:${__filename}]`)
			throw Response.error(Message('DATA_ERROR'))
		}
	}
}

module.exports = CategoryController
