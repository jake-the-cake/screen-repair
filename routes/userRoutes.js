const router = require('express').Router()

const User = require('../models/User.js')

// add a user
router.post('/add', async (req, res) => {
	try {
		const newUser = new User(
			{
				name: req.body.name,
				age: req.body.age,
				image: req.body.image
			}
		)
		if (newUser !== {}) {
			await newUser.save()
			console.log(`User: ${newUser.name} was added`)
			res.status(201).json(newUser)
		}
		else {
			res.status(500).json('Something happened')
		}
	}
	catch (err) {
		res.status(500).json(err.message)
	}
})

// delete user
router.delete('/delete/:id', async (req,res) => {
	try {
		const user = await User.findById(req.params.id)
		await user.delete()
		res.status(200).json(user)
	}
	catch (err) {
		res.status(404).json({
			error: true,
			message: `Cannot find user with id of ${req.params.id}`,
			statusCode: '404'
		})
	}
})

// update user
router.patch('/edit/:id', async (req, res) => {
	try {
		const user = await User.findById(req.params.id)
		await user.updateOne(req.body)
		res.status(200).json(user)
	}
	catch (err) {
		res.status(404).json({
			error: true,
			message: `Cannot find user with id of ${req.params.id}`,
			statusCode: '404'
		})
	}
})

// get single user
router.get('/:id', async (req,res) => {
	try {
		const user = await User.findById(req.params.id)
		res.status(200).json(user)
	}
	catch (err) {
		res.status(404).json({
			error:true,
			message:`Cannot find user with id of ${req.params.id}`,
			statusCode:'404'
		})
	}
})

// get all users
router.get('/', async (req, res) => {
	req // use unused variable
	try {
		const users = await User.find()
		users.forEach((user) => {
			const monthDayYear = String(user.createdAt).split(' ')
			user.newCreatedAt = `${monthDayYear[1]} ${monthDayYear[2]}, ${monthDayYear[3]}`
		})
		res.status(200).render('users', { data: users, pageTitle: 'API users' })
	}
	catch (err) {
		res.status(500).json(err.message)
	}
})

module.exports = router