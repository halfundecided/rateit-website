const loginRoutes = require("./login");
const signupRoutes = require("./signup");
const selectMajorRoutes = require("./select-major");
const selectCourseRoutes = require("./select-course");
const postRoutes = require("./posts");
const mainRoutes = require("./main");

const constructorMethod = app => {
  app.use("/login", loginRoutes);
  app.use("/signup", signupRoutes);
  app.use("/select-major", selectMajorRoutes);
  app.use("/select-course", selectCourseRoutes);
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
