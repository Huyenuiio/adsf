
const express = require('express');
const app = express();
const data = require('./data');
const port = 3001;

app.get('/api/data', (req, res) => {
    res.json(data);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
