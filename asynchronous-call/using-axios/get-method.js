// axios.post()   // to perform POST request
// axios.get()    // to perform GET request
// axios.put()    // to perform PUT request
// axios.delete() // to perform DELETE request
// axios.patch    // to perform PATCH request

const express = require('express');
const axios = require('axios');

const app = express();

const PORT = 7000;

app.use(express.json());

const baseUrl = 'https://run.mocky.io/v3/e4fe13c5-a728-43c7-bc8b-a9fe5b47a77f';

app.get('/axios', (req, res) => {
    return axios({
        method: "GET",
        url: baseUrl
    })
        .then(response => {
            return res.send(response.data)
        }).catch(err => {
            return err
        })
});

// optimal way to use axios

// currently response is empty as it is synchronous call
// in order to make it asynchronus add async before callback fn() and await before axios
app.get('/axios/new',  (req, res) => {
    const response =  axios({
        method: "GET",
        url: baseUrl
    });

    res.status(200).json(response.data);
});


app.listen(PORT, () => {
    console.log(`your axios GET server is running on PORT: ${PORT}`)
});

