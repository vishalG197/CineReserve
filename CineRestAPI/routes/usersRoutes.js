const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const verifyJWT = require('../middleware/verifyJWT');

// Apply verifyJWT middleware for all methods except POST
router.use((req, res, next) => {
  if (req.method !== 'POST') {
    verifyJWT(req, res, next);
  } else {
    next();
  }
});

router.route('/')
  .get(usersController.getAllUsers)
  .post(usersController.createNewUser)  
  .patch(usersController.updateUser)
  .delete(usersController.deleteUser);

module.exports = router;
