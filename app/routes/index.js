const auth = require('./api/auth.routes')
const brands = require('./api/brand.routes')
const carousel = require('./api/carousel.routes')
const company = require('./api/company.routes')
const city = require('./api/city.routes')
const packings = require('./api/packing.routes')
const profiles = require('./api/profile.routes')
const shippingCompanies = require('./api/shipping-company.routes')
const taxs = require('./api/tax.routes')
const users = require('./api/user.routes')
const features = require('./api/feature.routes')
const identificationTypes = require('./api/identification-type.routes')
const measures = require('./api/measure.routes')
const menus = require('./api/menu.routes')
const category = require('./api/category.routes')
const webCategory = require('./web/category.routes')
const products = require('./api/products.routes')
const productsWeb = require('./web/products.routes')

module.exports = [
	auth,
	brands,
	carousel,
	city,
	company,
	packings,
	profiles,
	shippingCompanies,
	taxs,
	users,
	features,
	identificationTypes,
	measures,
	menus,
	category,
	webCategory,
	products,
	productsWeb,
]
