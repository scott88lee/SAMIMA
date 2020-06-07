// IMPORTS
const express = require('express');
const handlebars = require('express-handlebars');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const db = require('./db');
const pgSession = require('connect-pg-simple')(session);

const app = express();
 
// Public Folder and Middleware

app.use(cookieParser());
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

const sessionSecret = process.env.COOKIE_SECRET || 'devSecret';

app.use(session({
  store: new pgSession({ pool : db }), // Connection pool
  secret: sessionSecret,
  saveUninitialized: false,
  resave: false,
  cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 } // 30 days
}));

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
app.use('/sales', require('./routes/sales'));
app.use('/reports', require('./routes/reports'));

//404 Precessing
app.get('*', (req, res) => {
    crap = { yay: 'Hello World' }
    res.render('err404', crap);
});

// LISTEN
app.listen(3000, () => { console.log('Listen port: 3000') });