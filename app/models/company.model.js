/**
 * @name CompanyModel
 * @type Class
 * @description Modelo encargado de la empresa
 * @author Luis Forero
 */

const { Model } = require('../base/model')

class CompanyModel extends Model {

    constructor() {
        super('company')
    }

}

module.exports.CompanyModel = CompanyModel