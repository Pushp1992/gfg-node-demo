const express = require('express');
const axios = require('axios');

const app = express();

const PORT = 7000;

/** MOCK API */
const baseUrl1 = 'https://run.mocky.io/v3/e4fe13c5-a728-43c7-bc8b-a9fe5b47a77f';
const baseUrl2 = "https://run.mocky.io/v3/c9d1fe91-21db-461d-9b79-a21b6f4da81e";
const baseUrl3 = "https://run.mocky.io/v3/2c98aa91-a70b-4321-9a91-3951e0eb378f";

// create promise
const promise1 = axios.get(baseUrl1);
const promise2 = axios.get(baseUrl2);
const promise3 = axios.get(baseUrl3);

// resolve promise
// promise1.then(res1 => console.log(res1.data));
// promise2.then(res2 => console.log(res2.data));
// promise3.then(res3 => console.log(res3.data));


app.get('/axios-promise', (req, res) => {
    promise1.then(res1 => res.send(res1.data));
    promise2.then(res2 => res.send(res2.data));
    promise3.then(res3 => res.send(res3.data));
})

app.listen(PORT, () => {
    console.log(`your axios GET server is running on PORT: ${PORT}`)
});