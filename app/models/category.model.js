/**
 * @name CategoryModel
 * @type Class
 * @description Modelo encargado de las categorías
 * @author Jaime Castrillón
 */

const { Model } = require('../base/model')

class CategoryModel extends Model {
	constructor() {
		super('categories')
	}

	async slugById(fields, where, order) {
		try {
			const sql = `
        SELECT id, name, slug, description, imageUrl, seo, status
				FROM ?? 
				WHERE ?
				ORDER BY ?
			`
			return await super.query(sql, ['products', where, order])
		} catch (error) {
			Log4js.error(`[action: ProductModel promotion][msg: ${error.message}][file:${__filename}]`)
			throw error
		}
	}
}

module.exports.CategoryModel = CategoryModel
