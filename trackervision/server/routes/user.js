const express = require('express')
const router = express.Router()

//controller functions
const { signupUser, loginUser} = require('../controllers/userController')

//login route
router.post('/Login', loginUser)

//sign route
router.post('/Signup', signupUser)

module.exports = router