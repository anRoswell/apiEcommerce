/**
 * @name MeasureService
 * @type Class
 * @description Servicio encargado de implementar el modelo de marcas
 * @author Alfonso Navarro
 */

const { Service } = require('../base/service')
const { MeasureModel } = require('../models/measure.model')

class MeasureService extends Service {
	constructor() {
		super(new MeasureModel())
	}
}

module.exports.MeasureService = MeasureService
