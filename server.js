var express = require('express');

var PORT = process.env.PORT || 8080;

var app = express();

// Server static content from the public directory in the application directory
app.use(express.static('public'));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set handlebars
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Import routes and give the server access to them
var routes = require('./controllers/burgers_controller.js');

app.use(routes);

// Start server to begin listening to clients requests
app.listen(PORT, function() {
    // Log server-side when our server has started
    console.log('Server listening on: http://localhost:' + PORT);
});