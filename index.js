require('./config/config');
require('./src/models/db');
require('./config/passportConfig');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

const routes = require('./src/routes');

const app = express();

// middleware
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());

for ( const route in routes ) {
    app.use(routes[route]);    
}

// error handling
app.use((err, req, res, next) => {
    if ( err.name === 'ValidationError' ) {
        var valErrors = [];
        Object.keys(err.errors).forEach( key => valErrors.push(err.errors[key].message) );
        res.status(422).send(valErrors);
    }
});

app.get('/', function(req, res) {
    res.send('welcome');
  });

// start server
app.listen(process.env.PORT, () => {
    console.log(`Server running on port : ${process.env.PORT}`);
});
