const express = require("express");
const router = express.Router();
const data = require("../data");
const courseData = data.courses;
const postData = data.posts;

router.get("/", async (req, res) => {
  const majorInfo = req.query.selectedMajor;

  try {
    const courseList = await courseData.getListOfCourses(majorInfo);
    res.render("selection2/select2-course", { courseList: courseList });
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

router.get("/categorized", async (req, res) => {
  const courseId = req.query.selectedCourse;

  try {
    const courseInfo = await courseData.getCourseById(courseId);
    const courseCode = courseInfo.code;
    const postList = await postData.getPostByCode(courseCode);
    res.render("posts/categorizedPost", { postList: postList });
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

module.exports = router;
