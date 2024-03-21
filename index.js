const express = require('express');
const cors = require('cors');

const app = express();
const port = 9002;
app.use(cors('*'))

app.get('*', (req, res) => {
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
