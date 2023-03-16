const express = require('express'); // Import express

const dotenv = require('dotenv').config() // Import dotenv

const app = express(); // Create express app

const errorHandler = require('./middleware/errorHandler') // Import error handler

const port = process.env.PORT || 5000; // Port to run server on
app.use(express.json()); // Parse JSON bodies (as sent by API clients)
app.use('/api/contacts',require('./routes/contactRoutes') ); //it is a middleware
app.use(errorHandler) //it is a middleware

app.listen(port, () =>{
    console.log("server running on port "+port);
});