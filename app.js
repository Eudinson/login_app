const express = require('express');
const cors = require('cors');

// routes imports goes here

const app = express();

app.use(cors({ 
    credentials: true,
}));

// app.use('/routes', router);

module.exports = app;