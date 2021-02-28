/**
 * @name BrandService
 * @type Class
 * @description Servicio encargado de implementar el modelo de marcas
 * @author Jaime Castrillón
 */

const { Service } = require('../base/service')
const { BrandModel } = require('../models/brand.model')

class BrandService extends Service {
  constructor() {
    super(new BrandModel())
  }

}

module.exports.BrandService = BrandService