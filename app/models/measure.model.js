/**
 * @name MeasureModel
 * @type Class
 * @description Modelo encargado de las marcas
 * @author Alfonso Navarro
 */

const { Model } = require('../base/model')

class MeasureModel extends Model {
	constructor() {
		super('measures')
	}
}

module.exports.MeasureModel = MeasureModel
