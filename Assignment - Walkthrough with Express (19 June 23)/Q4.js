const express = require('express');

const app = express();

const PORT = 3065;
const HOSTNAME = 'localhost';

app.get('/', (req, res) => {
    res.send('To get Random Number Enter "/random" in URL')
})

app.get('/random', (req, res) => {
    res.send(`New Randome Number is: ${Math.floor(Math.random()*100)}`)
})

app.listen(PORT, () => {
    console.log(`Server Running on ${HOSTNAME}:${PORT}`);
})