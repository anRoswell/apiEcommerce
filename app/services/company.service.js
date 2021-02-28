/**
 * @name CompanyService
 * @type Class
 * @description Servicio encargado de implementar el modelo de la empresa
 * @author Luis Forero
 */

const { Service } = require('../base/service')
const { CompanyModel } = require('../models/company.model')

class CompanyService extends Service {
    constructor() {
        super(new CompanyModel())
    }

}

module.exports.CompanyService = CompanyService