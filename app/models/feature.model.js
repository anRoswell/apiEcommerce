/**
 * @name FeatureModel
 * @type Class
 * @description Modelo encargado de las marcas
 * @author Alfonso Navarro
 */

const { Model } = require('../base/model')

class FeatureModel extends Model {
	constructor() {
		super('features')
	}
}

module.exports.FeatureModel = FeatureModel
