/* GET /api/exam?id=buoi-1-2
   Trả về câu hỏi + lựa chọn, KHÔNG kèm đáp án (an toàn cho thi). */
const { EXAMS } = require("./_exam-data.js");

module.exports = (req, res) => {
  const id = String((req.query && req.query.id) || "");
  const ex = EXAMS[id];
  if (!ex) {
    res.status(404).json({ error: "Không tìm thấy đề." });
    return;
  }
  res.setHeader("Cache-Control", "no-store");
  res.status(200).json({
    id,
    title: ex.title,
    durationMin: ex.durationMin,
    total: ex.questions.length,
    questions: ex.questions.map((q) => ({
      q: q.q,
      options: q.options,
      multi: Array.isArray(q.answer)   // câu chọn nhiều đáp án
    }))
  });
};
