const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    res.render("userAuth/login", {});
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

router.post("/ing", async (req, res) => {
  try {
    let username = req.body.username;
    let password = req.body.password;
  } catch (e) {}
});

module.exports = router;
