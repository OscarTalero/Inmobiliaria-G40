const express = require('express');
const morgan = require('morgan');


//Initializations
const app = express();
require('./database');

//Settings
app.set('port', process.env.PORT || 3000);


//Middleware
app.use(morgan('dev'));

//Global Variables


//Routes


//Static Files


//Server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})