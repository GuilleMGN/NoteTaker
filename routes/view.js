const path = require("path");
const router = require("express").Router();

// Directs to home page on initial load
router.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});
// Route to notes page
router.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

module.exports = router;