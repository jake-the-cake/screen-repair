/* init server */
import express from 'express';
const app = express();

/* environment variables */
import dotenv from 'dotenv';
dotenv.config();

/*  misc imports */
import { convertMonth } from '../common/dateTime.js';

/* init and open database */
import mongoose from 'mongoose';
mongoose.connect(process.env.DB)
	.then(()=>{console.log('...data stream live')})
	.catch(err=>console.log(err));

/* routing */
app.get('/', (req,res) => {
	res.send('we are here!');
});

/* broadcast */
const broadcastServer = (() => {
	try {
		// okug in to port
		app.listen(process.env.PORT || 4000);
		// create readable timestamp for logging
		///// todo /////
		// make the code block below into a 'common' function
		const timestamp = new Date();
		let month = convertMonth(timestamp.getMonth(), 'full');
		month = month[0].toUpperCase() + month.slice(1);
		const date = `${month} ${timestamp.getDay()}, ${timestamp.getFullYear()}`;
		const time = `${timestamp.getHours()}:${timestamp.getMinutes()}`;
		// display success
		console.log(`Server activated --> ${date} @ ${time}`);
	}
	catch (err) {
		console.log(err);
	}
	///// todo /////
	// check port number
	// if 4000, determine reason for default val
})();