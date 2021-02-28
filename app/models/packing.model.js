/**
 * @name PackingModel
 * @type Class
 * @description Modelo encargado de las marcas
 * @author Alfonso Navarro
 */

const { Model } = require('../base/model')

class PackingModel extends Model {
	constructor() {
		super('packing')
	}
}

module.exports.PackingModel = PackingModel
