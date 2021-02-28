const auth = require('./routes/auth-route')
const brands = require('./routes/brands-route')
const categories = require('./routes/categories-route')
const cities = require('./routes/cities-route')
const users = require('./routes/users-route')
const products = require('./routes/products-route')
const features = require('./routes/features-route')
const identificationtypes = require('./routes/identification-types-route')
const measures = require('./routes/measures-route')
const menus = require('./routes/menus-route')
const shippingCompanies = require('./routes/shipping-companies-route')
const taxes = require('./routes/taxes-route')
const packing = require('./routes/packing-route')
const profiles = require('./routes/profiles-route')
const companies = require('./routes/companies-route')

const Routes = [
	auth,
	brands,
	products,
	shippingCompanies,
	taxes,
	categories,
	cities,
	products,
	users,
	features,
	identificationtypes,
	measures,
	menus,
	packing,
	profiles,
	companies,
]

module.exports = Routes
