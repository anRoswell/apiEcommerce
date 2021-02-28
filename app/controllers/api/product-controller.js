/**
 * @name ProductController
 * @type Class
 * @description Controlador encargado de la funcionalidad de productos
 * @author Jaime Castrillón
 */

const Upload = require('../../base/upload')
const DBController = require('../../base/db-controller')
const Response = require('../../base/response')
const Message = require('../../messages/message')
const log4js = require('../../base/log4js')()

class ProductController extends DBController {
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
			fields.imageUrl = Upload.file(file)
			return await super.create(this.table, fields)
		} catch (error) {
			log4js.error(`[action: CategoryController create][msg: ${error.message}][file:${__filename}]`)
			throw Response.error(Message('CREATE_ERROR'))
		}
	}

	async update(fields, id) {
		try {
			return await super.update(this.table, fields, id)
		} catch (error) {
			log4js.error(`[action: CategoryController update][msg: ${error.message}][file:${__filename}]`)
			throw Response.error(Message('UPDATE_ERROR'))
		}
	}

	async delete(id) {
		try {
			return await super.delete(this.table, id)
		} catch (error) {
			log4js.error(`[action: CategoryController delete][msg: ${error.message}][file:${__filename}]`)
			throw Response.error(Message('DELETE_ERROR'))
		}
	}

	async one(id) {
		try {
			const fields = [
				'id',
				'name',
				'code',
				'slug',
				'excerpt',
				'description',
				'brandId',
				'measureId',
				'packingId',
				'taxId',
				'minStock',
				'maxStock',
				'balance',
				'cost',
				'price',
				'sale',
				'hasFeatures',
				'features',
				'categories',
				'imageUrl',
				'high',
				'width',
				'depth',
				'weight',
				'freeShipping',
				'filters',
				'withoutBalance',
				'kitSale',
				'kitSaleProducts',
				'related',
				'seo',
				'status',
			]
			const product = await super.one(this.table, id, fields)
			product.data.features = JSON.parse(product.data.features)
			product.data.categories = JSON.parse(product.data.categories)
			product.data.filters = JSON.parse(product.data.filters)
			product.data.kitSaleProducts = JSON.parse(product.data.kitSaleProducts)
			product.data.related = JSON.parse(product.data.related)
			product.data.seo = JSON.parse(product.data.seo)
			return product
		} catch (error) {
			log4js.error(`[action: CategoryController one][msg: ${error.message}][file:${__filename}]`)
			throw Response.error(Message('DATA_ERROR'))
		}
	}

	async all() {
		try {
			const fields = ['name', 'excerpt', 'description', 'price', 'sale', 'imageUrl']
			const order = ['id']
			return await super.all(this.table, fields, null, order)
		} catch (error) {
			log4js.error(`[action: CategoryController all][msg: ${error.message}][file:${__filename}]`)
			throw Response.error(Message('DATA_ERROR'))
		}
	}

	async list() {
		try {
			const fields = ['name', 'excerpt', 'description', 'price', 'sale', 'imageUrl', 'slug']
			const order = ['name']
			return await super.all(this.table, fields, null, order)
		} catch (error) {
			log4js.error(`[action: CategoryController all][msg: ${error.message}][file:${__filename}]`)
			throw Response.error(Message('DATA_ERROR'))
		}
	}
}

module.exports = ProductController
