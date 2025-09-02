const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const { title } = require('process');


const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Static files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/images', express.static(__dirname + 'public/images'));


//Set template engine
app.use(expressLayouts);
app.set('layouts', './layout');
app.set('view engine', 'ejs');

// Ejs connection
app.get('/', (req, res) => {

    data = {
        title: 'Brochure',
        description: 'A simple brochure website built with Node.js and SQLite.',
    }
    res.render('index', data);
});

app.get('/scene1', (req, res) => {
    data = {
        title: 'Scene 1',
        description: 'First scene description.',
    }
    res.render('scene1', data);
});

app.get('/scene2', (req, res) => {
    data = {
        title: 'Scene 2',
        description: 'Second scene description.',
    }
    res.render('scene2', data);
});

app.get('/scene3', (req, res) => {
    data = {
        title: 'Scene 3',
        description: 'Third scene description.',
    }
    res.render('scene3', data);
});

app.get('/contactus', (req, res) => {
    data = {
        title: 'Contact Us',
        description: 'Get in touch with us.',
    }
    res.render('contactus', data);
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});