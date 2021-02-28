/**
 * @name ProductModel
 * @type Class
 * @description Modelo encargado de las marcas
 * @author Alfonso Navarro
 */

const { Model } = require('../base/model')
const Log4js = require('./../base/log4js')()

class ProductModel extends Model {
	constructor() {
		super('products')
	}

	async promotion() {
		try {
			const sql = `
        SELECT * 
				FROM ??
				WHERE onSale = ?;
      `
			return await super.query(sql, ['products', 1])
		} catch (error) {
			Log4js.error(`[action: ProductModel promotion][msg: ${error.message}][file:${__filename}]`)
			throw error
		}
	}

	async newproducts() {
		try {
			const sql = `
        SELECT * 
				FROM ??
				WHERE isNew = ?;
      `
			return await super.query(sql, ['products', 1])
		} catch (error) {
			Log4js.error(`[action: ProductModel promotion][msg: ${error.message}][file:${__filename}]`)
			throw error
		}
	}
}

module.exports.ProductModel = ProductModel
