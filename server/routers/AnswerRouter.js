const {
  getAnswersByQuestionId,
  getAnswerByAnswerId,
} = require("../controllers/AnswersController");

const express = require("express");
const answersRouter = express.Router();

answersRouter.get("/answers/:questionId", getAnswersByQuestionId);
answersRouter.get("/answer/:answerId", getAnswerByAnswerId);
module.exports = answersRouter;
