const { getAnswersByQuestionId } = require("../controllers/AnswersController");

const express = require("express");
const answersRouter = express.Router();

answersRouter.get("/answers/:questionId", getAnswersByQuestionId);

module.exports = answersRouter;
