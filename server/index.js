/* init server */
import express from 'express';
const app = express();

/* environment variables */
import dotenv from 'dotenv';
dotenv.config();

/*  misc imports */
import { getTimeStamp } from '../common/dateTime.js';
import cors from 'cors';

/* init and open database */
import mongoose from 'mongoose';
mongoose.connect(process.env.DB)
	.then(()=>{console.log('...data stream live')})
	.catch(err=>console.log(err));

/* config */
app.use(cors);

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
		const { date, time } = getTimeStamp({month:'full'});
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