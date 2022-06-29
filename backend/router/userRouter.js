const express = require("express");
const userController = require("../controller/userController");

const router = express.Router();

router.route("/:id").get(userController.getUser);
router.route("/").post(userController.createUser);

module.exports = router;
