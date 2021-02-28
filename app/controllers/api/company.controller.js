/**
 * @name CompanyController
 * @type Class
 * @description Controlador encargado de la funcionalidad de empresa
 * @author Luis Forero
 */

const { CompanyService } = require('../../services/company.service')
const { Process } = require('../../base/process')
const Message = require('../../messages/message')
const Log4js = require('../../base/log4js')()
let _service = null

class CompanyController {

    constructor() {
        _service = new CompanyService()
    }

    /**
     * @method create
     * @param fields Campos para la creación de la empresa
     * @returns Promise datos de la acción realizada
     */

    async create(req, res) {
        try {
            const fields = req.body
            const data = await _service.create(fields)
            return Process.success(res, data, 201)
        } catch (error) {
            Log4js.error(`[action: CompanyController create][msg: ${error.message}][file:${__filename}]`)
            return Process.error(res, Message('CREATE_ERROR'))
        }
    }

    async update(req, res) {
        try {
            const fields = req.body
            const id = req.params.id
            const data = await _service.update(fields, id)
            return Process.success(res, data)
        } catch (error) {
            Log4js.error(`[action: CompanyController update][msg: ${error.message}][file:${__filename}]`)
            return Process.error(res, Message('UPDATE_ERROR'))
        }
    }

    async delete(req, res) {
        try {
            const id = req.params.id
            const data = await _service.delete(id)
            return Process.success(res, data)
        } catch (error) {
            Log4js.error(`[action: CompanyController delete][msg: ${error.message}][file:${__filename}]`)
            return Process.error(res, Message('DELETE_ERROR'))
        }
    }

    async one(req, res) {
        try {
            const id = req.params.id
            const fields = ['id', 'name']
            const data = await _service.one(id, fields)
            return Process.success(res, data)
        } catch (error) {
            Log4js.error(`[action: CompanyController one][msg: ${error.message}][file:${__filename}]`)
            return Process.error(res, Message('DATA_ERROR'))
        }
    }

    async all(req, res) {
        try {
            const fields = ['id', 'name', 'status']
            const order = ['id']
            const data = await _service.all(fields, {}, order)
            return Process.success(res, data)
        } catch (error) {
            Log4js.error(`[action: CompanyController all][msg: ${error.message}][file:${__filename}]`)
            return Process.error(res, Message('DATA_ERROR'))
        }
    }

    async list(req, res) {
        try {
            const fields = ['id', 'name', 'status']
            const order = ['name']
            const data = await _service.all(fields, {}, order)
            return Process.success(res, data)
        } catch (error) {
            Log4js.error(`[action: CompanyController list][msg: ${error.message}][file:${__filename}]`)
            return Process.error(res, Message('DATA_ERROR'))
        }
    }

}

module.exports.CompanyController = CompanyController