const {Router} = require('express')
const food = require('../controllers/food.controller')

const router = Router()

router.get('/', food.index)

router.post('/add', food.create)

router.get('/turn/:id', food.update)

router.get('/delete/:id', food.delete)


module.exports = router