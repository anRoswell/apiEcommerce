/**
  * @name ShippingCompanyController
  * @type Class
  * @description Controlador encargado de la funcionalidad de empresas de mensajería
  * @author Jaime Castrillón
  */

const DBController = require('../../base/db-controller')

class ShippingCompanyController extends DBController {

  constructor(table) {
    super()
    this.table = table
  }

  /**
   * @method create
   * @param fields Campos para la creación de empresa de mensajería
   * @returns Promise datos de la acción realizada
   */

  async create(fields) {
    try {
      return await super.create(this.table, fields)
    } catch (error) {
      throw error
    }
  }

  async update(fields, id) {
    try {
      return await super.update(this.table, fields, id)
    } catch (error) {
      throw error
    }
  }

  async delete(id) {
    try {
      return await super.delete(this.table, id)
    } catch (error) {
      throw error
    }
  }

  async one(id) {
    try {
      const fields = ['id', 'name', 'cities', 'disabled']
      const companies =  await super.one(this.table, id, fields)
      companies.data.cities = JSON.parse(companies.data.cities)
      return companies
    } catch (error) {
      throw error
    }
  }

  async all() {
    try {
      const fields = ['id', 'name', 'disabled']
      const order = ['id']
      return await super.all(this.table, fields, null, order)
    } catch (error) {
      throw error
    }
  }

  async list() {
    try {
      const fields = ['id', 'name', 'disabled']
      const order = ['name']
      return await super.all(this.table, fields, null, order)
    } catch (error) {
      throw error
    }
  }

}

module.exports = ShippingCompanyController