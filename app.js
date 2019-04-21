const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Load Routes
const index = require('./routes/index');
const users = require('./routes/users');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// Use Routes
app.use('/', index);
app.use('/users', users);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);