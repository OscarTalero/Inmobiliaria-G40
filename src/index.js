const express = require('express');
const path = require('path');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const methodOverride = require('method-override');



//Initializations
const app = express();
require('./database');

//Settings
app.set('port', process.env.PORT || 3001);
app.set('views', path.join(__dirname,'views'));
app.engine('.hbs', engine ({
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


/*
//Server
app.get("/", function(req,res){
    res.render("index");
})

app.post("/addname", (req, res) => {
    var myData = new User(req.body);
    myData.save()
    .then(item => {
    res.send("item saved to database");
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
   });

*/


app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})