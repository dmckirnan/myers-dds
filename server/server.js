const express = require('express');
const path = require('path');

const app = express();
// const port = process.env.port || 5000;

// app.use('/static', express.static(path.join(__dirname, '..', 'build')));
app.use(express.static(path.join(__dirname, '..', '/build')));
app.get('*', (req, res) => res.sendFile('index.html'));

app.listen(process.env.port || 8080);
