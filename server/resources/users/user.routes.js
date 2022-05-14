const router = require("express").Router();
const userControllers = require("./user.controllers");
const { protect } = require("../../utils/auth");

// http://localhost:8080/v1/users

router
  .route("/")
  .get(protect, userControllers.getAll)
  .post(userControllers.createOne);
router
  .route("/:id")
  .get(userControllers.getOne)
  .patch(userControllers.updateOne)
  .delete(userControllers.removeOne);

module.exports = router;
