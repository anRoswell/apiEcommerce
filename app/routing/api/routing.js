const JWT = require('../../middlewares/jwt')

const Routing = (controller) => {
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
			let file
			if (req.files) {
				file = req.files.imageUrl
			}

			ctrl
				.create(fields, file)
				.then((success) => onSuccess(res, success))
				.catch((error) => onError(res, error))
		},

		update(req, res) {
			const fields = req.body
			const id = req.params.id
			let file
			if (req.files) {
				file = req.files.imageUrl
			}
			ctrl
				.update(fields, id, file)
				.then((success) => onSuccess(res, success))
				.catch((error) => onError(res, error))
		},

		delete(req, res) {
			const id = req.params.id
			ctrl
				.delete(id)
				.then((success) => onSuccess(res, success))
				.catch((error) => onError(res, error))
		},

		one(req, res) {
			const id = req.params.id
			ctrl
				.one(id)
				.then((success) => onSuccess(res, success))
				.catch((error) => onError(res, error))
		},

		all(req, res) {
			// const fields = req.params.id
			ctrl
				.all()
				.then((success) => onSuccess(res, success))
				.catch((error) => onError(res, error))
		},

		list(req, res) {
			// const fields = req.body
			ctrl
				.list()
				.then((success) => onSuccess(res, success))
				.catch((error) => onError(res, error))
		},

		auth(req, res) {
			const { username, password } = req.body
			ctrl
				.auth(username, password, req.ip)
				.then((success) => {
					const token = JWT.create(success.data)
					res.header('Authorization', `Bearer ${token}`)
					success.data = {
						id: success.data.id,
						access: success.data.access,
						lastDateLogin: success.data.lastDateLogin,
						lastIpLogin: success.data.lastIpLogin,
						name: success.data.name,
					}
					onSuccess(res, success)
				})
				.catch((error) => onError(res, error))
		},
	}
}

module.exports = Routing
