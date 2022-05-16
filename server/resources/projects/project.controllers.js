const crudControllers = require("./../../utils/crud");
const Project = require("./project.model");

module.exports = crudControllers(Project);
