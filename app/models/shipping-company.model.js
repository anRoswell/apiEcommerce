/**
 * @name ShippingCompanyModel
 * @type Class
 * @description Modelo encargado de las marcas
 * @author Alfonso Navarro
 */

const { Model } = require('../base/model')

class ShippingCompanyModel extends Model {
	constructor() {
		super('shipping_companies')
	}
}

module.exports.ShippingCompanyModel = ShippingCompanyModel
