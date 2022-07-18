const mongoose = require('mongoose')

const Schema = mongoose.Schema


const loginSchema = new Schema(
	{
		username: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true }
	}
    ,	{ collection: 'logins' } //later remove this and test
)

const login = mongoose.model('Login', loginSchema) // if collection is unspecified, it will use lowercase 'UserData' plus s

module.exports = login