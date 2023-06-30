const express = require('express');
const path = require('path');
require('dotenv').config({path: __dirname + '/../.env'});

console.log(process.env.PORT);

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/../client/build'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/../client/build/index.html');
});

app.listen(PORT, () => console.log( `http://localhost:${PORT}` ));
