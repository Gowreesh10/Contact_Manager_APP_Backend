const express = require('express'); // Import express
const connectDB = require('./config/dbConnection');
// const connectDB = require('mongoose')
// connectDB.connect('mongodb+srv://Gowreesh:V%40tt%40r76@gowreeshcluster.momqdv3.mongodb.net/mycontacts-backend')
// connectDB.set('strictQuery', true);
const dotenv = require('dotenv').config() // Import dotenv
connectDB(); // Connect to database
const app = express(); // Create express app

const errorHandler = require('./middleware/errorHandler') // Import error handler

const port = process.env.PORT || 5000; // Port to run server on
app.use(express.json()); // Parse JSON bodies (as sent by API clients)
app.use('/api/contacts',require('./routes/contactRoutes') ); //it is a middleware
app.use(errorHandler) //it is a middleware

app.listen(port, () =>{
    console.log("server running on port "+port);
});