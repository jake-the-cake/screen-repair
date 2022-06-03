/* init server */
const express = require('express')
const app = express()

/* environment variables */
const dotenv = require('dotenv')
dotenv.config()

/* config */
const cors = require('cors')
app.use(cors())
app.set('view engine', 'ejs')
app.set('views', './views')

/* init and connect to database */
const mongo = require('mongoose')
mongo.connect(process.env.DB)
	.then(() => { console.log('...data stream live') })
	.catch(err => console.log(err));

/* routing */
app.get('/', (req,res) => {
 	res.render('home', {data:{}, pageTitle:'Home'})
})

app.get('/users', (req, res) => {
	let x = [
		{
			name: 'jay',
			age: 37
		},
		{
			name: 'anna',
			age: 36
		}
	]
	res.render('users', {data:x,pageTitle:'User List'})
})

/* broadcast */
const start = () => {
	let timestamp = 'now'
	try {
		app.listen(process.env.PORT || 3000)
		console.log(`Server has started --> ${timestamp}`)
		///////////////
		// todo:
		// 		-> create common time and date functions to format stamp
		//		-> check is broadcasting to 3000 instead and debug
	}
	catch (err) {
		console.log(err)
	}
}
start()