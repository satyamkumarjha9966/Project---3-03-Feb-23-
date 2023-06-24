const EventEmitter = require('events');

const event = new EventEmitter();

const subscribeMessage = (channelName) => {
    console.log(`Thanks For Subscribing to ${channelName}`);
  };

event.addListener('subscribe', subscribeMessage);

event.emit('subscribe', 'College Wallah');

console.log(`The default maximum number of event listners are: ${event.getMaxListeners()}`);

event.setMaxListeners(5);

console.log(`The updated maximum number of event listners are: ${event.getMaxListeners()}`);

