/**
 * @name TaxService
 * @type Class
 * @description Servicio encargado de implementar el modelo de marcas
 * @author Alfonso Navarro
 */

const { Service } = require('../base/service')
const { TaxModel } = require('../models/tax.model')

class TaxService extends Service {
	constructor() {
		super(new TaxModel())
	}
}

module.exports.TaxService = TaxService
