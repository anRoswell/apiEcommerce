/**
 * @name MeasureController
 * @type Class
 * @description Controlador encargado de la funcionalidad de unidades de medida
 * @author Jaime Castrillón
 */

const DBController = require('../../base/db-controller')

class MeasureController extends DBController {
    constructor(table) {
        super()
        this.table = table
    }

    /**
     * @method create
     * @param fields Campos para la creación de unidad de medida
     * @returns Promise datos de la acción realizada
     */

    async create(fields, file) {
        try {
            return await super.create(this.table, fields)
        } catch (error) {
            log4js.error(`[action: MeasureController create][msg: ${error.message}][file:${__filename}]`)
            throw Response.error(Message('CREATE_ERROR'))
        }
    }

    async update(fields, id) {
        try {
            return await super.update(this.table, fields, id)
        } catch (error) {
            log4js.error(`[action: MeasureController update][msg: ${error.message}][file:${__filename}]`)
            throw Response.error(Message('UPDATE_ERROR'))
        }
    }

    async delete(id) {
        try {
            return await super.delete(this.table, id)
        } catch (error) {
            log4js.error(`[action: MeasureController delete][msg: ${error.message}][file:${__filename}]`)
            throw Response.error(Message('DELETE_ERROR'))
        }
    }

    async one(id) {
        try {
            const fields = ['id', 'name', 'code', 'status']
            return await super.one(this.table, id, fields)
        } catch (error) {
            log4js.error(`[action: MeasureController one][msg: ${error.message}][file:${__filename}]`)
            throw Response.error(Message('DATA_ERROR'))
        }
    }

    async all() {
        try {
            const fields = ['id', 'name', 'code', 'status']
            const order = ['id']
            return await super.all(this.table, fields, null, order)
        } catch (error) {
            log4js.error(`[action: MeasureController all][msg: ${error.message}][file:${__filename}]`)
            throw Response.error(Message('DATA_ERROR'))
        }
    }

    async list() {
        try {
            const fields = ['id', 'name', 'code', 'status']
            const order = ['name']
            return await super.all(this.table, fields, null, order)
        } catch (error) {
            log4js.error(`[action: MeasureController list][msg: ${error.message}][file:${__filename}]`)
            throw Response.error(Message('DATA_ERROR'))
        }
    }
}

module.exports = MeasureController