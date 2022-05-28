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
try {
	app.listen(process.env.PORT || 4000);
	const timestamp = new Date();
	let month = convertMonth(timestamp.getMonth(), 'full');
	month = month[0].toUpperCase() + month.slice(1);
	// display success
	console.log(`Server activated --> ${month} ${timestamp.getDay()}, ${timestamp.getFullYear()} @ ${timestamp.getHours()}:${timestamp.getMinutes()}`);
}
catch (err) {
	console.log(err);
}