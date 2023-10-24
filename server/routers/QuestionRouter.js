const {
  getQuestionById,
  getAllQuestions,
} = require("../controllers/QuestionsController");

const express = require("express");
const questionRoute = express.Router();

questionRoute.get("/:questionId", getQuestionById);
questionRoute.get("/", getAllQuestions);

module.exports = questionRoute;
