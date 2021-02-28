/**
 * @name BrandModel
 * @type Class
 * @description Modelo encargado de las marcas
 * @author Jaime Castrillón
 */

const { Model } = require('../base/model')

class BrandModel extends Model {

  constructor() {
    super('brands')
  }

}

module.exports.BrandModel = BrandModel