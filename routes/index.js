const loginRoutes = require("./login");
const signupRoutes = require("./signup");
const selectMajorRoutes = require("./select-major");
const selectCourseRoutes = require("./select-course");
const postRoutes = require("./posts");

const constructorMethod = app => {
  app.use("/login", loginRoutes);
  app.use("/signup", signupRoutes);
  app.use("/select-major", selectMajorRoutes);
  app.use("/select-course", selectCourseRoutes);
  app.use("/posts", postRoutes);

  app.use("/", (req, res) => {
    res.render("index", {});
  });

  app.use("*", (req, res) => {
    res.redirect("/");
  });
};

module.exports = constructorMethod;
