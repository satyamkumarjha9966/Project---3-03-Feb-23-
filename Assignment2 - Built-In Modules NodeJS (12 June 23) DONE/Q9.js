const EventEmitter = require('events');

const event = new EventEmitter();

const subscribeMessage = (channelName) => {
    console.log(`Thanks For Subscribing to ${channelName}`);
  };

event.addListener('subscribe', subscribeMessage);

console.log("Calling event listner before removing the event.");

event.emit('subscribe', 'College Wallah');

console.log("Calling event listner after removing the event.");

event.removeListener('subscribe', subscribeMessage);

eventEmitter.emit("subscribe", "College Wallah"); 
     // It's throw Error Which is : ReferenceError: eventEmitter is not defined