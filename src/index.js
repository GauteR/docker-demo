const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/public/about.html');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
