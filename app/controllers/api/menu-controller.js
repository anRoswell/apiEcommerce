/**
 * @name MenuController
 * @type Class
 * @description Controlador encargado de la funcionalidad de menús
 * @author Jaime Castrillón
 */

const DBController = require('../../base/db-controller')

class MenuController extends DBController {
    constructor(table) {
        super()
        this.table = table
    }

    /**
     * @method create
     * @param fields Campos para la creación de menús
     * @returns Promise datos de la acción realizada
     */

    async create(fields, file) {
        try {
            fields.imageUrl = Upload.file(file)
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
            const fields = ['id', 'name', 'url', 'icon', 'menuId', 'order', 'status']
            return await super.one(this.table, id, fields)
        } catch (error) {
            throw error
        }
    }

    async all() {
        try {
            const fields = ['id', 'name', 'url', 'icon', 'menuId', 'order', 'status']
            const order = ['menuId', 'order']
            return await super.all(this.table, fields, null, order)
        } catch (error) {
            throw error
        }
    }

    async list() {
        try {
            const fields = ['id', 'name', 'url', 'icon', 'menuId', 'order', 'status']
            const order = ['menuId', 'order']
            return await super.all(this.table, fields, null, order)
        } catch (error) {
            throw error
        }
    }
}

module.exports = MenuController