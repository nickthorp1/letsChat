const express = require("express");
const { registerUser } = require("../controllers/userControllers");
const router = express.Router();

router.route("/test").get(registerUser);

// router.route("/register").post(registerUser);
// router.route('/login', authUser)

module.exports = router;
