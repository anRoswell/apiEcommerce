/**
 * @name CarouselModel
 * @type Class
 * @description Modelo encargado de las marcas
 * @author Luis Forero
 */

const { Model } = require('../base/model')

class CarouselModel extends Model {

    constructor() {
        super('carousel')
    }

}

module.exports.CarouselModel = CarouselModel