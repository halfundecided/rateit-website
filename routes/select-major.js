const express = require("express");
const router = express.Router();
const data = require("../data");
const majorData = data.majors;

router.get("/", async (req, res) => {
  try {
    const majorList = await majorData.getListOfMajors();
    console.log(majorList);
    res.render("selection/select-major", { majorList: majorList });
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

module.exports = router;
