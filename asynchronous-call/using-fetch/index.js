const express = require('express');
const fetch = require('node-fetch');

const app = express();

const PORT = 7000;

const baseUrl = "https://run.mocky.io/v3/e4fe13c5-a728-43c7-bc8b-a9fe5b47a77f";

app.get('/fetch', (req, res) => {
    fetch(baseUrl)
    .then(response => response.json())
    .then(data => res.send(data))
});

app.listen(PORT, () => {
    console.log(`your FETCH server is running on PORT: ${PORT}`)
});