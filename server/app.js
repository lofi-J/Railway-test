import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 8080;
const __dirname = path.resolve();

app.use(express.static(__dirname + '/../client/build'));
console.log(__dirname)
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/../client/build/index.html');
});

app.listen(PORT, () => console.log( `http://localhost:${PORT}` ));