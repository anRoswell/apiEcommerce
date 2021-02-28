const JWT = require('../../middlewares/jwt')

const Routing = ((controller) => {
  const ctrl = controller

  const onSuccess = (res, success) => {
    // console.log('Success: ', success)
    res.status(success.status).json(success.data)
  }

  const onError = (res, error) => {
    // console.log('Error: ', error)
    res.status(error.status).json(error.error)
  }

  return {

    create(req, res) {
      const fields = req.body
      ctrl.create(fields)
        .then(success => onSuccess(res, success))
        .catch(error => onError(res, error))
    },

    update(req, res) {
      const fields = req.body
      const id = req.params.id
      ctrl.update(fields, id)
        .then(success => onSuccess(res, success))
        .catch(error => onError(res, error))
    },

    delete(req, res) {
      const id = req.params.id
      ctrl.delete(id)
        .then(success => onSuccess(res, success))
        .catch(error => onError(res, error))
    },

    one(req, res) {
      const id = req.params.id
      ctrl.one(id)
        .then(success => onSuccess(res, success))
        .catch(error => onError(res, error))
    },

    all(req, res) {
      const fields = req.params.id
      ctrl.all(fields)
        .then(success => onSuccess(res, success))
        .catch(error => onError(res, error))
    },

    list(req, res) {
      // const fields = req.body
      ctrl.list()
        .then(success => onSuccess(res, success))
        .catch(error => onError(res, error))
    },

    auth(req, res) {
      const { username, password } = req.body
      ctrl.auth(username, password, req.ip)
        .then(success => {
          const token = JWT.create(success.data)
          res.header('Authorization', `Bearer ${token}`)
          onSuccess(res, success)
        })
        .catch(error => onError(res, error))
    }

  }
})

module.exports = Routing