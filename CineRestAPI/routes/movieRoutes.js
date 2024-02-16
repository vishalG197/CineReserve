const express = require("express");
const router = express.Router();
const controller = require("../controllers/movieController");

const verifyJWT = require("../middleware/verifyJWT");

router.use(verifyJWT);
router
  .route("/")
  .get(controller.getAllMovies)
  .post(controller.createNewMovie)
  .patch(controller.updateMovie)
  .delete(controller.deleteMovie);

module.exports = router;
