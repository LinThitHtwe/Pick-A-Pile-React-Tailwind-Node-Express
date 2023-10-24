const {
  getAllQuestionsService,
  getQuestionByIdService,
} = require("../services/questionService");

const getQuestionById = (req, res) => {
  const { questionId } = req.params;
  if (!questionId) return res.status(400).json({ error: "Params are missing" });
  const question = getQuestionByIdService(questionId);
  if (!question) return res.status(500).json({ error: "Something went wrong" });
  return res.status(200).json(question);
};

const getAllQuestions = (req, res) => {
  const questions = getAllQuestionsService();
  if (!questions)
    return res.status(404).json({ error: "Cannot Get Questions" });
  return res.status(200).json(questions);
};

module.exports = {
  getQuestionById,
  getAllQuestions,
};
