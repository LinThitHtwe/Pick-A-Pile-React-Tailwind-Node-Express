const {
  getAnswersByQuestionIdService,
  getAnswerByAnswerIdService,
} = require("../services/answersService");

const getAnswersByQuestionId = (req, res) => {
  const { questionId } = req.params;
  const answers = getAnswersByQuestionIdService(questionId);
  if (!answers) return res.status(404).json({ error: "Cant get Answers" });
  return res.status(200).json(answers);
};

const getAnswerByAnswerId = (req, res) => {
  const { answerId } = req.params;
  const answer = getAnswerByAnswerIdService(answerId);
  if (!answer) return res.status(404).json({ error: "No Answer Found" });
  return res.status(200).json(answer);
};

module.exports = { getAnswersByQuestionId, getAnswerByAnswerId };
