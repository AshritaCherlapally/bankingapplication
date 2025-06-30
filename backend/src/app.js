const express = require("express");
const NotFoundError = require("./middlewares/404handling");
const ApiError = require("./utils/apiError");
const app = express();
// const port = 3000;
app.use("/api/v1", require("./router"));
app.get("/", (req, res) => {
  res.send({ msg: "Hello World!" });
});
app.use("", (req, res, next) => {
  next(new ApiError(404, "Not found"));
});
app.use(NotFoundError);
module.exports = app;
