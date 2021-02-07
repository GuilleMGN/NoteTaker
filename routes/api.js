const path = require("path");
const router = require("express").Router();
router.get("/api", function(req, res) {
    res.sendFile(path.join(__dirname, "../db/db.json"));
});

module.exports = router;