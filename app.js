const express = require('express');
const cors = require('cors');

// routes imports goes here
const userActionsRouter = require('./routes/userActionsRouter');

const app = express();

app.use(express.json({ 
    limit: "50mb" 
}));

app.use(express.urlencoded({ 
    limit: "50mb", 
    extended: true 
}));

app.use(cors({ 
    credentials: true,
}));

app.use('/user-actions', userActionsRouter);

module.exports = app;