const express = require('express');

const app = express();

const PORT = 7000;


app.get('/', (req, res) => {
    res.send('hello ho ware you today');
});

app.listen(PORT, () => {
    console.log(`your server is running on PORT: ${PORT}`)
});


