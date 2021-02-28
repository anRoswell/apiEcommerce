/**
 * @name ProductService
 * @type Class
 * @description Servicio encargado de implementar el modelo de productos
 * @author Alfonso Navarro
 */

const { ProductModel } = require('../models/product.model')
const { Service } = require('../base/service')
const Log4js = require('./../base/log4js')()

let _model = null

class ProductService extends Service {
	constructor() {
		super(new ProductModel())
		_model = new ProductModel()
	}

	async promotion() {
		try {
			const resultado = await _model.promotion()
			return resultado
		} catch (error) {
			Log4js.error(`[action: AuthService auth][msg: ${error.message}][file:${__filename}]`)
			throw error
		}
	}

	async newproducts() {
		try {
			const resultado = await _model.newproducts()
			return resultado
		} catch (error) {
			Log4js.error(`[action: AuthService auth][msg: ${error.message}][file:${__filename}]`)
			throw error
		}
	}
}

module.exports.ProductService = ProductService
