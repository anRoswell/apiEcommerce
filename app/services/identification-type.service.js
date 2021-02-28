/**
 * @name IdentificationTypeService
 * @type Class
 * @description Servicio encargado de implementar el modelo de marcas
 * @author Alfonso Navarro
 */

const { Service } = require('../base/service')
const { IdentificationTypeModel } = require('../models/identification-type.model')

class IdentificationTypeService extends Service {
	constructor() {
		super(new IdentificationTypeModel())
	}
}

module.exports.IdentificationTypeService = IdentificationTypeService
