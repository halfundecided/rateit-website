const loginRoutes = require("./login");
const signupRoutes = require("./signup");
const selectMajorRoutes = require("./select-major");

const constructorMethod = app => {
  app.use("/login", loginRoutes);
  app.use("/signup", signupRoutes);
  app.use("/select-major", selectMajorRoutes);

  app.use("/", (req, res) => {
    res.render("index", {});
  });

  app.use("*", (req, res) => {
    res.redirect("/");
  });
};

module.exports = constructorMethod;
