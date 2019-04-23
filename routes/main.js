const express = require("express");
const router = express.Router();
const data = require("../data");
const userData = data.users;
const postData = data.posts;

router.get("/", async (req, res) => {
  try {
    const numberOfUsers = await userData.numberOfUsers();
    const numberOfPosts = await postData.numberOfPosts();
    res.render("index", { userNum: numberOfUsers, postNum: numberOfPosts });
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

module.exports = router;
