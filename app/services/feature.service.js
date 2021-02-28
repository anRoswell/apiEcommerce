/**
 * @name FeatureService
 * @type Class
 * @description Servicio encargado de implementar el modelo de marcas
 * @author Alfonso Navarro
 */

const { Service } = require('../base/service')
const { FeatureModel } = require('../models/feature.model')

class FeatureService extends Service {
	constructor() {
		super(new FeatureModel())
	}
}

module.exports.FeatureService = FeatureService
