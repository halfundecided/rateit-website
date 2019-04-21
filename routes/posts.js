const express = require("express");
const router = express.Router();
const data = require("../data");
const postData = data.posts;

router.get("/", async (req, res) => {
  const getPostInfo = req.query;
  if (
    !getPostInfo ||
    !getPostInfo.instructorName ||
    !getPostInfo.selectedTerm ||
    !getPostInfo.question1 ||
    !getPostInfo.question2 ||
    !getPostInfo.question3 ||
    !getPostInfo.question4 ||
    !getPostInfo.question5 ||
    !getPostInfo.question6 ||
    !getPostInfo.question7 ||
    !getPostInfo.question8
  ) {
    res.status(400).json({ error: "You must provide answers for all" });
  }
  const postInfoFromUser = {
    instructorName: getPostInfo.instructorName,
    term: getPostInfo.selectedTerm,
    q1: getPostInfo.question1,
    q2: getPostInfo.question2,
    q3: getPostInfo.question3,
    q4: getPostInfo.question4,
    q5: getPostInfo.question5,
    q6: getPostInfo.question6,
    q7: getPostInfo.question7,
    q8: getPostInfo.question8
  };
  try {
    const postList = await postData.addPost(postInfoFromUser);
    res.render("posts/posts", { postList: postList });
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

module.exports = router;
