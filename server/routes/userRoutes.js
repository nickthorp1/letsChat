const expression = require('express')
const { registerUser } = require('../controllers/userControllers')
const router = expression.Router()

router.route('/register').post(registerUser)
// router.route('/login', authUser)

module.exports= router;
