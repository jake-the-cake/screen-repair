/* init server */
const express = require('express')
const app = express()

/* environment variables */
const dotenv = require('dotenv')
dotenv.config()

/* config */
const cors = require('cors')
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.set('views', './views')

/* route imports */
const authRouter = require('./routes/authRoutes.js')
const userRouter = require('./routes/userRoutes.js')

/* init and connect to database */
const mongo = require('mongoose')
mongo.connect(process.env.DB)
.then(() => { console.log('...data stream live') })
.catch(err => console.log(err));

/* routing */
app.use('/api/users', userRouter)
app.use('/auth', authRouter)

/* home page */
app.get('/', (req,res) => {
	req
 	res.render('home', {data:{}, pageTitle:'Home'})
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