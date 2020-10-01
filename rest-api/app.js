const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

require('dotenv/config');
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(cors());
/**

//Middleware
app.use('/userId', () => {
    console.log("middleware runs whenever /userId route hits")
})

//it can be used as route authentication
*/

// import routes
const authRouter = require('./routes/auth');
const serviceRouter = require("./routes/service");
app.use('/auth', authRouter);
app.use('/service', serviceRouter);

// get value from .env
console.log(process.env.USERNAME);
console.log(process.env.PASSWORD);

//connect to DB
mongoose.connect('mongodb://localhost:27017/Employees').then(() => {
    console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});

// listening server
app.listen(3000);