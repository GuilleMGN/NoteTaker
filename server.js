// Dependencies
// =============================================================
const express = require("express");
// const apiRoutes = require("./routes/api");
const viewRoutes = require("./routes/view");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// app.use("/api", apiRoutes);
app.use("/", viewRoutes);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  