/**
 * @name CarouselService
 * @type Class
 * @description Servicio encargado de implementar el modelo de carrusel
 * @author Luis Forero
 */

const { Service } = require('../base/service')
const { CarouselModel } = require('../models/carousel.model')

class CarouselService extends Service {
    constructor() {
        super(new CarouselModel())
    }

}

module.exports.CarouselService = CarouselService