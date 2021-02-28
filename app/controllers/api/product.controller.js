/**
 * @name Product.controller
 * @type Class
 * @description Controlador encargado de la funcionalidad de marcas
 * @author Alfonso Navarro
 */

const { ProductService } = require('../../services/product.service.js')
const { Process } = require('../../base/process')
const Message = require('../../messages/message')
const Response = require('./../../base/response')
const Log4js = require('./../../base/log4js')()
let _service = null

class ProductController {
	constructor() {
		_service = new ProductService()
	}

	/**
	 * @method create
	 * @param fields Campos para la creación de marcas
	 * @returns Promise datos de la acción realizada
	 */
	async create(req, res) {
		try {
			const fields = req.body
			const data = await _service.create(fields)
			return Process.success(res, data, 201)
		} catch (error) {
			Log4js.error(`[action: ProductController create][msg: ${error.message}][file:${__filename}]`)
			return Process.error(res, Message('CREATE_ERROR'))
		}
	}

	async update(req, res) {
		try {
			const fields = req.body
			const id = req.params.id
			const data = await _service.update(fields, id)
			return Process.success(res, data)
		} catch (error) {
			Log4js.error(`[action: ProductController update][msg: ${error.message}][file:${__filename}]`)
			return Process.error(res, Message('UPDATE_ERROR'))
		}
	}

	async delete(req, res) {
		try {
			const id = req.params.id
			const data = await _service.delete(id)
			return Process.success(res, data)
		} catch (error) {
			Log4js.error(`[action: ProductController delete][msg: ${error.message}][file:${__filename}]`)
			return Process.error(res, Message('DELETE_ERROR'))
		}
	}

	async one(req, res) {
		try {
			const id = req.params.id
			const fields = ['id', 'name']
			const data = await _service.one(id, fields)
			return Process.success(res, data)
		} catch (error) {
			Log4js.error(`[action: ProductController one][msg: ${error.message}][file:${__filename}]`)
			return Process.error(res, Message('DATA_ERROR'))
		}
	}

	async all(req, res) {
		try {
			const fields = ['id', 'name', 'status']
			const order = ['id']
			const data = await _service.all(fields, {}, order)
			return Process.success(res, data)
		} catch (error) {
			Log4js.error(`[action: ProductController all][msg: ${error.message}][file:${__filename}]`)
			return Process.error(res, Message('DATA_ERROR'))
		}
	}

	async list(req, res) {
		try {
			const fields = ['id', 'name', 'status']
			const order = ['name']
			const data = await _service.all(fields, {}, order)
			return Process.success(res, data)
		} catch (error) {
			Log4js.error(`[action: ProductController list][msg: ${error.message}][file:${__filename}]`)
			return Process.error(res, Message('DATA_ERROR'))
		}
	}

	async novedades(req, res) {
		try {
			const fields = ['name', 'excerpt', 'description', 'price', 'sale', 'imageUrl']
			const order = ['name']
			const isnew = {
				isnew: 1,
			}
			const data = await _service.novedades(fields, isnew, order)
			return Process.success(res, data, 201)
		} catch (error) {
			log4js.error(`[action: CategoryController all][msg: ${error.message}][file:${__filename}]`)
			throw Response.error(Message('DATA_ERROR'))
		}
	}

	async newProduct(req, res) {
		try {
			const data = await _service.newproducts()
			return Process.success(res, data, 201)
		} catch (error) {
			console.log(error)
			log4js.error(`[action: product-controller newProduct][msg: ${error.message}][file:${__filename}]`)
			throw Response.error(Message('DATA_ERROR'))
		}
	}

	async promotion(req, res) {
		try {
			const data = await _service.promotion()
			return Process.success(res, data, 201)
		} catch (error) {
			log4js.error(`[action: product-controller promotion][msg: ${error.message}][file:${__filename}]`)
			throw Response.error(Message('DATA_ERROR'))
		}
	}
}

module.exports.ProductController = ProductController
