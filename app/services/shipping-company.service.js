/**
 * @name ShippingCompanyService
 * @type Class
 * @description Servicio encargado de implementar el modelo de marcas
 * @author Alfonso Navarro
 */

const { Service } = require('../base/service')
const { ShippingCompanyModel } = require('../models/shipping-company.model')

class ShippingCompanyService extends Service {
	constructor() {
		super(new ShippingCompanyModel())
	}
}

module.exports.ShippingCompanyService = ShippingCompanyService
