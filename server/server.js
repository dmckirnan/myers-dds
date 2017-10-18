const express = require('express');
const path = require('path');

const app = express();
// const port = process.env.port || 5000;

// app.use('/static', express.static(path.join(__dirname, '..', 'build')));
app.use(express.static(path.join(__dirname, '/')));
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '..', 'build/index.html')));

const server = app.listen(process.env.port || 5000, () => console.log('Live on 5000'));
module.exports = server;
