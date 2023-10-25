const questions = require("../data/questions");
const answers = require("../data/answers");
const { getAnswersByQuestionIdService } = require("./answersService");

const getAllQuestionsService = () => {
  const allQuestions = questions.Questions;
  const combineData = allQuestions.map((q) => {
    const answer = getAnswersByQuestionIdService(q.QuestionId);
    const answerImageUrls = answer.map((answer) => answer.AnswerImageUrl);
    return {
      ...q,
      answerImageUrls: answerImageUrls[0],
    };
  });
  return combineData;
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
