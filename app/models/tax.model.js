/**
 * @name TaxModel
 * @type Class
 * @description Modelo encargado de las marcas
 * @author Alfonso Navarro
 */

const { Model } = require('../base/model')

class TaxModel extends Model {
	constructor() {
		super('tax')
	}
}

module.exports.TaxModel = TaxModel
