const express = require("express");
const router = express.Router();
const controller = require("../controllers/bookingController");

const verifyJWT = require('../middleware/verifyJWT')

router.use(verifyJWT)
router.route("/")
.get(controller.getAllBookings)
.post(controller.createNewBooking)
.patch(controller.updateBooking)
.delete(controller.deleteBooking)

module.exports = router;
