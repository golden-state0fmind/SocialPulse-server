//imports
require('dotenv').config();
const morgan = require('morgan');
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
//sets up server
const port = process.env.PORT || 4000;
const app = express();
//middleware
app.use(morgan('dev')); //server logging
app.use(express.json()); //JSON parsing
//Connection to Mongo DB
mongoose.connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});
mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${mongoose.connection.host}:${mongoose.connection.port}`);
});
mongoose.connection.on("error", (err) => {
    console.log("Could not connect to MongoDB!", err);
});
//API routes
app.use('/api/v1/user', routes.user);
//Server Connection
app.listen(port, () => { console.log(`Listening to the smooth sound 🎧 of port ${port}`) });