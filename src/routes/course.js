const courseController = require("../controllers/courseController");

const routes = async (app, opts) => {
  // Get all courses
  app.route({
    method: "GET",
    url: "/courses",
    handler: courseController.getCourses,
  });
};

module.exports = routes;
