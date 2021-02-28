/**
 * @name CityModel
 * @type Class
 * @description Modelo encargado de las ciudades
 * @author Luis Forero
 */

const { Model } = require('../base/model')

class CityModel extends Model {

    constructor() {
        super('cities')
    }

}

module.exports.CityModel = CityModel