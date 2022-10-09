const express = require('express');
const axios = require('axios');

const app = express();

const PORT = 7000;

/** Create promise */
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'Simaran');
})

app.get('/multiple-promise', (req, res) => {
    Promise.all([promise1, promise2, promise3])
    .then((data) => {
        res.send(data);
    })
});

app.listen(PORT, () => {
    console.log(`your axios GET server is running on PORT: ${PORT}`)
});
