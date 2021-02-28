/**
 * @name BrandController
 * @type Class
 * @description Controlador encargado de la funcionalidad de marcas
 * @author Jaime Castrillón
 */

const DBController = require('../../base/db-controller')

class BrandController extends DBController {

    constructor(table) {
        super()
        this.table = table
    }

    /**
     * @method create
     * @param fields Campos para la creación de marcas
     * @returns Promise datos de la acción realizada
     */

    async create(fields) {
        try {
            return await super.create(this.table, fields)
        } catch (error) {
            log4js.error(`[action: BrandController create][msg: ${error.message}][file:${__filename}]`)
            throw Response.error(Message('CREATE_ERROR'))
        }
    }

    async update(fields, id) {
        try {
            return await super.update(this.table, fields, id)
        } catch (error) {
            log4js.error(`[action: BrandController update][msg: ${error.message}][file:${__filename}]`)
            throw Response.error(Message('UPDATE_ERROR'))
        }
    }

    async delete(id) {
        try {
            return await super.delete(this.table, id)
        } catch (error) {
            log4js.error(`[action: BrandController delete][msg: ${error.message}][file:${__filename}]`)
            throw Response.error(Message('DELETE_ERROR'))
        }
    }

    async one(id) {
        try {
            const fields = ['id', 'name']
            return await super.one(this.table, id, fields)
        } catch (error) {
            log4js.error(`[action: BrandController one][msg: ${error.message}][file:${__filename}]`)
            throw Response.error(Message('DATA_ERROR'))
        }
    }

    async all() {
        try {
            const fields = ['id', 'name', 'status']
            const order = ['id']
            return await super.all(this.table, fields, null, order)
        } catch (error) {
            log4js.error(`[action: BrandController all][msg: ${error.message}][file:${__filename}]`)
            throw Response.error(Message('DATA_ERROR'))
        }
    }

    async list() {
        try {
            const fields = ['id', 'name', 'status']
            const order = ['name']
            return await super.all(this.table, fields, null, order)
        } catch (error) {
            log4js.error(`[action: BrandController list][msg: ${error.message}][file:${__filename}]`)
            throw Response.error(Message('DATA_ERROR'))
        }
    }

}

module.exports = BrandController