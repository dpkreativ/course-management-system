const client = require("../db/db_config");

// Get all courses
const getCourses = async (req, res) => {
  const allCourses = await client.query("SELECT * FROM mydb.courses");

  res.send({ allCourses });
};

// Export controllers
module.exports = {
  getCourses,
};
