// Dependencies
// =============================================================
const express = require("express");
const path = require("path");
const viewRoutes = require("./routes/view");
const apiRoutes = require("./routes/api");
const fs = require("fs");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// app.use("/api", apiRoutes);
app.use("/", viewRoutes);
app.use("/api", apiRoutes);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  