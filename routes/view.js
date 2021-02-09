const path = require("path");
const router = require("express").Router();

// Route to notes page
router.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});
// Directs to home page
router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;