const express = require("express");
const router = express.Router();
const data = require("../data");
const majorData = data.majors;

router.get("/", async (req, res) => {
  try {
    const majorList = await majorData.getListOfMajors();
    res.render("selection2/select2-major", {
      majorList: majorList
    });
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

module.exports = router;
