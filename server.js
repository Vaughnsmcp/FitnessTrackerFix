'use strict';

const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use(require('./routes/html.js'));
app.use(require('./routes/workout.js'));

const MONGODB_URI=process.env.MONGODB_URI
mongoose.connect(MONGODB_URI ||'mongodb://user:password1@ds117858.mlab.com:17858/heroku_0zbl4zxx', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`);
});
