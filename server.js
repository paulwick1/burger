var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var router = require('./controllers/burgers_controller.js');

var app = express();
var PORT = process.env.PORT || 3000;

// content for the app from the "public" directory.
app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride("_method"));
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Using the router required on line 6
app.use('/', router);

// Listening to the PORT set up on line 9
app.listen(PORT, function(){
	console.log("Listening on: " + PORT);
});