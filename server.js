var express = require("express");
// app for express //
var app = express();


// Port //
var PORT = process.env.PORT || 8080;


// Data Parsing //
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routing //
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);



  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
