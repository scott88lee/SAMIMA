// IMPORTS
const express = require('express');
const handlebars = require('express-handlebars');
//const cookieParser = require('cookie-parser');

const app = express();

// Public Folder and Middleware
app.use(express.static('public'));
//app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// View engine setup
const hbsConfig = {
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs',
    defaultLayout: 'defaultLayout',
}
app.set('view engine', 'hbs');
app.engine('hbs', handlebars(hbsConfig));

// ROUTES
app.use('/', require('./routes/index'));
app.use('/products', require('./routes/products'));
app.use('/purchases', require('./routes/purchases'));

//404 Precessing
app.get('*', (req, res) => {
    crap = { yay: 'Hello World' }
    res.render('err404', crap);
});

// LISTEN
app.listen(3000, () => { console.log('Listen port: 3000') });