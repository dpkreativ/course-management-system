const client = require("../db/db_config");

// Get all courses
const getCourses = async (req, res) => {
  const allCourses = await client.query("SELECT * FROM mydb.courses");

  res.send({ allCourses });
};

// Add new course
const addCourse = async (req, res) => {
  const allProperties = Object.keys(req.body).length;

  if (allProperties !== 4) {
    res.code(400).send({
      error:
        "Some properties are missing! Add the name, description, author, and link.",
    });
    return;
  }

  try {
    const newCourse = await client.insert({
      table: "courses",
      records: [
        {
          name: req.body.name,
          description: req.body.description,
          author: req.body.author,
          link: req.body.link,
        },
      ],
    });

    res.send({ newCourse });
  } catch (error) {
    res.send({ error });
  }
};

// Get specific course
const getSpecificCourse = async (req, res) => {
  const course = await client.query(
    `SELECT * FROM mydb.courses WHERE id=${req.params.id}`
  );

  res.send({ course });
};

// Export controllers
module.exports = {
  getCourses,
  addCourse,
  getSpecificCourse,
};
