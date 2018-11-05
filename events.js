var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create Event Handler
var myEventHandler = function(){
    console.log('I hear a scream!');
}
eventEmitter.on('scream',myEventHandler);
eventEmitter.emit('scream');