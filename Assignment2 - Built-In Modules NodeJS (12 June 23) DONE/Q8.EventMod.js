const EventEmitter = require('events');

const event = new EventEmitter();

event.addListener('subscribe', (msg) => {
console.log(`Thanks For Subscribing to ${msg}`)
})

event.emit('subscribe', 'College Wallah')