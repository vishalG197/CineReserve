const express = require('express');
const router = express.Router();
const seatController=require("../controllers/seatController");
const verifyJWT = require('../middleware/verifyJWT');
router.use(verifyJWT);

router.route("/")
.get(seatController.getAllSeats)
.post(seatController.createNewSeat)
.patch(seatController.updateSeat)
.delete(seatController.deleteSeat)

module.exports = router;
