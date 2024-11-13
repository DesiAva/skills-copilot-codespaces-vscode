// Create web server with Express.js
// Run server with Node.js
// Open browser and navigate to http://localhost:3000

// Load express module
var express = require('express');
// Create express server
var app = express();

// Load body-parser module
var bodyParser = require('body-parser');
// Parse JSON data
app.use(bodyParser.json());

// Load comments module
var comments = require('./comments');

// Get all comments
app.get('/comments', function (req, res) {
    res.json(comments.get());
});

// Add new comment
app.post('/comments', function (req, res) {
    var comment = req.body;
    comments.add(comment);
    res.json(comment);
});

// Start server and listen on port 3000
app.listen(3000, function () {
    console.log('Server is running on http://localhost:3000');
});
