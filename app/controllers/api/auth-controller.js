/**
  * @name AuthController
  * @type Class
  * @description Controlador encargado de la validación de usuarios
  * @author Jaime Castrillón
**/

const bcrypt = require('bcryptjs')
const DBController = require('../../base/db-controller')
const Response = require('../../base/response')
const Message = require('../../messages/message')
const log4js = require('../../base/log4js')()

class AuthController extends DBController {

  async auth(username, password, ip) {
    try {
      if(!username || !password) {
        throw Response.error(Message('LOGIN_INVALID'), 401)
      } else {
        const [user] = await super.auth(username)
        if (!user) {
          throw Response.error(Message('LOGIN_INVALID'), 401)
        } else {
          const valid = bcrypt.compareSync(password, user.password)
          if (!valid) {
            throw Response.error(Message('LOGIN_INVALID'), 401)
          } else {
            delete user['password']
            const options = await super.menus(user.profileId)
            const menus = options.filter(o => !o.menuId)
            menus.map(m => {
              m.menus = options.filter(o => m.id === o.menuId)
            })
            const buffer = Buffer.from(JSON.stringify(menus), 'utf8')
            user.access = buffer.toString('base64')
            await super.lastLogin(user.id, ip)
            return Response.success(user)
          }
        }
      }
    } catch (error) {
      log4js.error(`[action: AuthController auth error][msg: ${error.message}][file:${__filename}]`)
      throw Response.error(Message('LOGIN_INVALID'), 401)
    }
  }

}

module.exports = AuthController