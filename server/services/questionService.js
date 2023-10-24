const questions = require("../data/questions");

const getAllQuestionsService = () => {
  return questions.Questions;
};

const getQuestionByIdService = (questionId) => {
  const question = questions.Questions.find((q) => {
    return q.QuestionId == questionId;
  });
  if (!question) return { error: "No Question Found" };
  return question;
};

module.exports = {
  getAllQuestionsService,
  getQuestionByIdService,
};
