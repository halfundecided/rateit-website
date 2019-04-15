const express = require("express");
const router = express.Router();
const data = require("../data");
const courseData = data.courses;

router.get("/", async (req, res) => {
  const majorInfo = req.query.selectedMajor;

  try {
    const courseList = await courseData.getListOfCourses(majorInfo);
    res.render("selection/select-course", { courseList: courseList });
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

module.exports = router;
