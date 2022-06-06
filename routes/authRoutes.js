const router = require('express').Router()

const User = require('../models/User.js')

// add a user
router.get('/register', (req, res) => {
	res.status(200).render('register', {pageTitle:'Register'})
})

module.exports = router