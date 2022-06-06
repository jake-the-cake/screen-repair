const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
	{
		name: {type:String, required:true},
		age: Number,
		image: String,
		security: {type:Number, required:true, default:1}
	},
	{ timestamps: true }
)

const User = mongoose.model('User', userSchema)

module.exports = User