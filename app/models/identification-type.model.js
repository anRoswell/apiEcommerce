/**
 * @name IdentificationTypeModel
 * @type Class
 * @description Modelo encargado de las marcas
 * @author Alfonso Navarro
 */

const { Model } = require('../base/model')

class IdentificationTypeModel extends Model {
	constructor() {
		super('identification-types')
	}
}

module.exports.IdentificationTypeModel = IdentificationTypeModel
