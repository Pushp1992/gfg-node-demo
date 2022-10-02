const album = require('express').Router();

album.get('/', (req, res, next) => {
    res.send(' you are at album page');
});

album.get('/:albumId', (req, res, next) => {
    let albumId = req.params.albumId;

    res.send(`you have fetched album with ID: ${albumId}`);
});

module.exports = album;

