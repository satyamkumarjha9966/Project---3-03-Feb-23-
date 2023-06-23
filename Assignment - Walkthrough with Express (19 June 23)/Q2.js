const express = require('express');

const app = express();

const PORT = 3066;
const HOSTNAME = 'localhost';

let counter = 0;

app.get('/', (req, res) => {
    res.send(`Counter: ${counter}`)
})

app.get('/increment', (req, res) => {
    res.send(`Counter: ${counter++}`)
})

app.get('/decrement', (req, res) => {
    res.send(`Counter: ${counter--}`)
})

app.listen(PORT, () => {
    console.log(`Server Running on ${HOSTNAME}:${PORT}`);
})