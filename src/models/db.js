const mongoose = require('mongoose');
require('./user.model');

mongoose.connect(process.env.MONGODB_URI, (err) => {
    if ( !err ) {
        console.log('Mongo DB connection succesful')
    } else {
        console.log('Error in Mongo DB connection: ' + JSON.stringify( err, undefined, 2));
    }
})
