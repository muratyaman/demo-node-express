const express = require('express');
const app = express();
const port = 8099;

app.get('/api', (req, res) => res.json({ data: 'Hello World!', ts: new Date() }));
app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
