/**
 * @name UserService
 * @type Class
 * @description Servicio encargado de implementar el modelo de marcas
 * @author Alfonso Navarro
 */

const { Service } = require('../base/service')
const { UserModel } = require('../models/user.model')

class UserService extends Service {
	constructor() {
		super(new UserModel())
	}
}

module.exports.UserService = UserService
