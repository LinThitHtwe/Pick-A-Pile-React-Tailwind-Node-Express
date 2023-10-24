const express = require("express");
const questionRoute = require("./routers/QuestionRouter");
const answersRoute = require("./routers/AnswerRouter");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.listen(8000, () => {
  console.log("server listening at 8080");
});
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("questions/", questionRoute);
app.use("/", answersRoute);
