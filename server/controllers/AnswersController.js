const { getAnswersByQuestionIdService } = require("../services/answersService");

const getAnswersByQuestionId = (req, res) => {
  const { questionId } = req.params;
  const answers = getAnswersByQuestionIdService(questionId);
  if (!answers) return res.status(404).json({ error: "Cant get Answers" });
  return res.status(200).json(answers);
};

module.exports = { getAnswersByQuestionId };
