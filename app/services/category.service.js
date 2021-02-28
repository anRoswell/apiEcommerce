/**
 * @name CategoryService
 * @type Class
 * @description Servicio encargado de implementar el modelo de categorías
 * @author Jaime Castrillón
 */

const { Service } = require('../base/service')
const { CategoryModel } = require('../models/category.model')
const Log4js = require('./../base/log4js')()

let _model = null

class CategoryService extends Service {
	constructor() {
		super(new CategoryModel())
		_model = new CategoryModel()
	}

	async slug(fields, where, order) {
		try {
			return await super.all(fields, where, order)
		} catch (error) {
			Log4js.error(`[action: CategoryService slug][msg: ${error.message}][file:${__filename}]`)
			throw error
		}
	}

	async slugById(fields, where, order) {
		try {
			const resultado = await _model.slugById(fields, where, order)
			return resultado
		} catch (error) {
			Log4js.error(`[action: category.service slugById][msg: ${error.message}][file:${__filename}]`)
			throw error
		}
	}
}

module.exports.CategoryService = CategoryService
