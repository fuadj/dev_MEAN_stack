var mongoose = require('mongoose');
var gracefulShutdown;
var dbURI = 'mongodb://localhost/dev_MEAN_stack';

mongoose.connect(dbURI);

/*
 * BEGIN: Mongoose Connection Events
 */
mongoose.connection.on('connected', function() {
    console.log('Mongoose connected to ' + dbURI);
})

mongoose.connection.on('error', function() {
    console.log('Mongoose connection error ' + dbURI);
})

mongoose.connection.on('disconnected', function() {
    console.log('Mongoose disconnected');
})
/*
 * END: Mongoose Connection Events
 */


/*
 * BEGIN: Node processes termination/restart signal event hooks 
 */
gracefulShutdown = function (msg, callback) {
    mongoose.connection.close(function () {
        console.log('Mongoose disconnected through ' + msg);
        callback();
    });
};

process.once('SIGUSR2', function () {
    gracefulShutdown('nodemon restart', function () {
        process.kill(process.pid, 'SIGUSR2');
    });
});

process.on('SIGINT', function () {
    gracefulShutdown('app termination', function () {
        process.exit(0);
    });
});

process.on('SIGTERM', function() {
    gracefulShutdown('Heroku app shutdown', function () {
        process.exit(0);
    });
});

require('./locations');