/* POST /api/submit
   Body: { examId, name, answers: {index: chosenOptionIndex}, durationSec, violations }
   - Chấm điểm phía server (dựa đáp án thật).
   - Gửi embed kết quả + thống kê đúng/sai về Discord (qua webhook).
   - Trả về cho client: điểm + mảng đúng/sai (KHÔNG trả đáp án đúng). */
const { EXAMS } = require("./_exam-data.js");

const LETTERS = ["A", "B", "C", "D", "E"];

function fmtTime(sec) {
  sec = Math.max(0, Math.round(sec || 0));
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m} phút ${s} giây`;
}

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  let body = req.body;
  if (typeof body === "string") {
    try { body = JSON.parse(body); } catch (e) { body = {}; }
  }
  body = body || {};

  const examId = String(body.examId || "");
  const ex = EXAMS[examId];
  if (!ex) {
    res.status(400).json({ error: "Đề không hợp lệ." });
    return;
  }

  const name = String(body.name || "(không tên)").slice(0, 80);
  const answers = body.answers && typeof body.answers === "object" ? body.answers : {};
  const durationSec = Number(body.durationSec) || 0;
  const violations = Number(body.violations) || 0;
  const autoSubmit = !!body.autoSubmit;

  // ----- chấm điểm -----
  let correct = 0;
  const results = [];      // cho client: chỉ true/false
  const detail = [];       // cho Discord: có đáp án đúng
  ex.questions.forEach((q, i) => {
    const chosen = (i in answers) ? Number(answers[i]) : null;
    const ok = chosen === q.answer;
    if (ok) correct++;
    results.push(ok);
    detail.push({ i, chosen, correct: q.answer, ok });
  });
  const total = ex.questions.length;
  const pct = Math.round((correct / total) * 100);

  // ----- gửi Discord -----
  const webhook = process.env.DISCORD_WEBHOOK_URL;
  let sent = false;
  if (webhook) {
    try {
      const grid = detail
        .map((d) => `${d.i + 1}${d.ok ? "✅" : "❌"}`)
        .join("  ");
      const wrong = detail.filter((d) => !d.ok);
      const wrongText = wrong.length
        ? wrong
            .map((d) => `#${d.i + 1} (chọn ${d.chosen == null ? "—" : LETTERS[d.chosen]}, đúng ${LETTERS[d.correct]})`)
            .join(", ")
        : "🎉 Đúng tất cả!";

      let desc = `**Lưới đáp án:**\n${grid}\n\n**Câu sai:** ${wrongText}`;
      if (desc.length > 4000) desc = desc.slice(0, 3990) + "…";

      const embed = {
        title: "📊 Kết quả kiểm tra — " + ex.title,
        color: pct >= 50 ? 0x4ade80 : 0xf87171,
        fields: [
          { name: "👤 Học viên", value: name || "(không tên)", inline: true },
          { name: "📝 Điểm", value: `${correct}/${total} (${pct}%)`, inline: true },
          { name: "⏱️ Thời gian làm", value: fmtTime(durationSec), inline: true },
          { name: "🚨 Vi phạm", value: `${violations} lần${autoSubmit ? " (tự nộp do vi phạm)" : ""}`, inline: true }
        ],
        description: desc,
        timestamp: new Date().toISOString(),
        footer: { text: "Toàn Học Lập Trình C" }
      };

      const r = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: "Toàn Học Lập Trình C", embeds: [embed] })
      });
      sent = r.ok;
    } catch (e) {
      sent = false;
    }
  }

  res.status(200).json({ score: correct, total, pct, results, sent });
};
