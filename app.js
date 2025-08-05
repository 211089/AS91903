const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const { title } = require('process');
const sqlite3 = require('sqlite3').verbose();
let sql; 

const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

//Static files
app.use(express.static('public'));


//Set template engine
app.use(expressLayouts);
app.set('layouts', './layout');
app.set('view engine', 'ejs');

// Ejs connection
app.get('/', (req, res) => {

    data = {
        title: 'Student Management System',
        description: 'A simple student management system built with Node.js and SQLite.',
    }
    res.render('index', data);
});

// Database connection
const db = new sqlite3.Database('./test.db', (err) => {
    if (err) {
        console.error('Error opening database ' + err.message);
    } else {
        console.log('Connected to the student database.');
    }
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});