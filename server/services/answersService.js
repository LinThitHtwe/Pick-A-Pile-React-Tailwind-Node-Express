const answers = require("../data/answers");

const getAnswersByQuestionIdService = (questionId) => {
  const answersForEachQuestion = answers.Answers.filter(
    (a) => a.QuestionId == questionId
  );

  if (answersForEachQuestion.length === 0)
    return { error: "Cannot Get Answers" };

  return answersForEachQuestion;
};

const getAnswerByAnswerIdService = (answerId) => {
  const answer = answers.Answers.find((a) => (a.AnswerId = answerId));

  if (!answer) return { error: "No Answer Found" };

  return answer;
};

module.exports = {
  getAnswersByQuestionIdService,
  getAnswerByAnswerIdService,
};
