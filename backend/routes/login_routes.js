const express = require('express')
const router = express.Router();
const Login = require('../models/loginModel')

const jwt = require('jsonwebtoken')
//const bcrypt = require('bcryptjs')


//get all logins
router.get('/', async (req, res) =>{ // to access this '/api/login/', refer to server.js
    const logins = await Login.find({}).sort({username:1})
    console.log('get every logins');
    //res.send('watup')
    res.status(200).json(logins)
});

//register new login
router.post('/', async (req, res) => { // to access this '/api/login/'
	console.log(req.body)
	try {
		const newPassword = req.body.password//await bcrypt.hash(req.body.password, 10)
		await Login.create({
			username: req.body.username,
			email: req.body.email,
			password: newPassword,
		})
		res.json({ status: 'ok' })
	} catch (err) {
		res.json({ status: 'error', error: 'Duplicate email' })
	}
});

//check login
router.post('/check', async (req, res) => { //'/api/login/check'
	const user = await Login.findOne({
		email: req.body.email, 
	})

	if (!user) {
		return { status: 'error', error: 'Invalid login' }
	}

	let isPasswordValid = false

    if(req.body.password === user.password)
        isPasswordValid = true
    // await bcrypt.compare(
	// 	req.body.password,
	// 	user.password
	// )

	if (isPasswordValid) {
		const token = jwt.sign(
			{
				username: user.username,
				email: user.email,
			},
			'secret123'
		)

		return res.json({ status: 'ok', user: token })
	} else {
		return res.json({ status: 'error', user: false })
	}
})

//verify token
router.get('/verify-token', async (req, res) => { //'/api/login/verify-token'
	const token = req.headers['x-access-token']

	try {
		const decoded = jwt.verify(token, 'secret123')
		const email = decoded.email
		const user = await Login.findOne({ email: email })

		return res.json({ status: 'ok', username: user.username, email:email })
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'invalid token' })
	}
})

module.exports = router