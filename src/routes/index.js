const {Router} = require('express')
const foodRoutes = require('./food')

const router = Router()

router.use('/api/food', foodRoutes)


module.exports = router