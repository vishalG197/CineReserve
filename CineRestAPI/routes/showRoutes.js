const express = require("express");
const router = express.Router();
const controller = require("../controllers/showController");

const verifyJWT = require('../middleware/verifyJWT')

router.use(verifyJWT)
router.route("/")
.get(controller.getAllShows)
.post(controller.createNewShow)
.patch(controller.updateShow)
.delete(controller.deleteShow)

module.exports = router;
