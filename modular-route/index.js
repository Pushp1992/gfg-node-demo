const express = require('express');

const app = express();

const PORT = 7000;

const albumRouter = require('./route');

app.use('/album', albumRouter);

app.listen(PORT, () => {
    console.log(`server is running on PORt: ${PORT}`)
});

