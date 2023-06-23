const express = require('express')

const app = express();

const PORT = 3058;
const HOSTNAME = 'localhost';

app.get('/', (req, res) => {
    res.send({msg:`I am homepage`})
})

app.get('/about', (req, res) => {
    res.send({msg:`I am about page`})
})

app.get('/contact', (req, res) => {
    res.send({emai:`suppor#@pwskills.com`})
})

app.listen(PORT, () => {
    console.log(`Server Running on ${HOSTNAME}:${PORT}`);
})
