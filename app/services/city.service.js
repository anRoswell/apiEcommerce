/**
 * @name CityService
 * @type Class
 * @description Servicio encargado de implementar el modelo de ciudades
 * @author Luis Forero
 */

const { Service } = require('../base/service')
const { CityModel } = require('../models/city.model')

class CityService extends Service {
    constructor() {
        super(new CityModel())
    }

}

module.exports.CityService = CityService