const express = require("express");
const router = express.Router();
const controller = require("../controllers/UserController");

// Get all users
router.get("/", controller.profile);

// Get user profile ny :id and by :name
router.get("/name/:name", controller.getUser_BN);
/*router.get("/id/:id", controller.getUser_BI);
router.get("/name/:name", controller.getUser_BN);*/

module.exports = router;
