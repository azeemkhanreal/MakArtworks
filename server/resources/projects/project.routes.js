const router = require("express").Router();
const projectControllers = require("./project.controllers");
// routes defined for http://localhost:5000/v1/projects
router
  .route("/")
  .get(projectControllers.getAll)
  .post(projectControllers.createOne);

// routes defined for http://localhost:5000/v1/projects/:id
router
  .route("/:id")
  .get(projectControllers.getOne)
  .patch(projectControllers.updateOne)
  .delete(projectControllers.removeOne);

module.exports = router;
