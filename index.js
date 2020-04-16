// IMPORTS
const express = require('express');
const app = express();

// Public Folder and Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// ROUTES

//404 Precessing
app.get('*', (req, res) => { 
    res.statusCode = 404;
    let dude = {msg:'Hello World'}
    res.send(dude);
});

// LISTEN
app.listen(3000, () => {console.log('Listen port: 3000')} );