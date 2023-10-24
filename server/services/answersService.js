const answers = require("../data/answers");

const getAnswersByQuestionIdService = (questionId) => {
  const answersForEachQuestion = answers.Answers.filter(
    (a) => a.QuestionId == questionId
  );

  if (answersForEachQuestion.length === 0) {
    return { error: "Cannot Get Answers" };
  }

  //const extractedAnswers = answersForEachQuestion.map((a) => a.Answers);

  return answersForEachQuestion;
};

module.exports = {
  getAnswersByQuestionIdService,
};
