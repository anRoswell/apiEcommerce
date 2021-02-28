/**
 * @name PackingService
 * @type Class
 * @description Servicio encargado de implementar el modelo de marcas
 * @author Alfonso Navarro
 */

const { Service } = require('../base/service')
const { PackingModel } = require('../models/packing.model')

class PackingService extends Service {
	constructor() {
		super(new PackingModel())
	}
}

module.exports.PackingService = PackingService
