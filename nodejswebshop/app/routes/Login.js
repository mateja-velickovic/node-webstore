const express = require("express");
const router = express.Router();
const controller = require("../controllers/LoginController");

// Login
router.get("/", controller.userLogin);

module.exports = router;
