const loginRoutes = require("./login");
const signupRoutes = require("./signup");
const selectMajorRoutes = require("./select-major");
const selectCourseRoutes = require("./select-course");
const postRoutes = require("./posts");
const mainRoutes = require("./main");
const selectMajorRoutes2 = require("./select2-major");
const selectCourseRoutes2 = require("./select2-course");

const constructorMethod = app => {
  app.use("/login", loginRoutes);
  app.use("/signup", signupRoutes);
  app.use("/select-major", selectMajorRoutes);
  app.use("/select-course", selectCourseRoutes);
  app.use("/select2-major", selectMajorRoutes2);
  app.use("/select2-course", selectCourseRoutes2);
  app.use("/posts", postRoutes);
  app.use("/", mainRoutes);

  // app.use("/", (req, res) => {
  //   res.render("index", { number: numberofUsers });
  // });

  app.use("*", (req, res) => {
    res.redirect("/");
  });
};

module.exports = constructorMethod;
