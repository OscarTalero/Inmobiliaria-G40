const express = require('express');
const path = require('path');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const methodOverride = require('method-override');
const connectDb = require('./config/db');


//Initializations
const app = express();

//Settings 
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname,'views'));
app.engine('.hbs', engine ({
   // partialsDir: path.join(app('get-views')),
    extname: '.hbs'
    }));
app.set('view engine', '.hbs');


//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
//app.use(methodOverride('_method'));

//Global Variables


//Routes
app.use(require('./routes/index'));
app.use(require('./routes/persona'));



//Static Files
app.use(express.static(path.join(__dirname, 'public')));



app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})