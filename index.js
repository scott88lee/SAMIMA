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
// var indexRouter = require('./routes/index');
// var productsRouter = require('./routes/products');
// app.use('/', indexRouter);
// app.use('/products', productsRouter);

app.get('/', (req, res) => {
    //Serves the body of the page aka "main.handlebars"
    // to the container //aka "index.handlebars"
    res.render('main', { layout: 'index' });
});

app.get('/weaser', (req, res) => {
    //Serves the body of the page aka "main.handlebars"
    // to the container //aka "index.handlebars"
    res.render('main', { yay: "helloWorld"});
});

//404 Precessing
app.get('*', (req, res) => {
    crap = { yay: 'Hello World' }
    res.render('err404', crap);
});

// LISTEN
app.listen(3000, () => { console.log('Listen port: 3000') });