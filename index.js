const express = require('express');

const app = express();
const port = 9002;


app.get('/clicks', (req, res) => {
    fetch('http://global-clicker.mrcode.io/getpoints')
    .then(res => {
        return res.text()
    })
    .then(clicks => {
        res.json({ clicks: parseInt(clicks) });
    })
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
